// ts-nocheck
interface MetaBallObject {
  key: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface IState {
  radiusDivider: number;
  smallCircleRadius: number;
  distributionRadius: number;
  xSpeed: number;
  ySpeed: number;
  ballCount: number;
  r: number;
  g: number;
  b: number;
  webGLNotSupported: boolean;
  canvasWidth: number;
  canvasHeight: number;
}

const webglOptions = {
  powerPreference: `high-performance`,
  antialias: false,
  transparent: true,
  resolution: 0.1,
  alpha: false,
  desynchronized: true,
  depth: false,
  failIfMajorPerformanceCaveat: true,
  premultipliedAlpha: false,
  preserveDrawingBuffer: true,
};

export class WebGLMetaballs {
  private gl: WebGLRenderingContext | null = null;
  private metaballsHandle: WebGLUniformLocation | null = null;
  private bgColorUniformLocation: WebGLUniformLocation | null = null;
  private animationRequest: number | null = null;
  private timerID: ReturnType<typeof setTimeout> | null = null;
  private CANVAS_WIDTH: number = 0;
  private CANVAS_HEIGHT: number = 0;
  private CANVAS_CENTER_X: number = 0;
  private CANVAS_CENTER_Y: number = 0;
  private metaBalls: Array<MetaBallObject> = [];
  private state: IState;

  constructor(state: IState) {
    this.state = state;
    this.CANVAS_WIDTH = this.state.canvasWidth;
    this.CANVAS_HEIGHT = this.state.canvasHeight;
    this.CANVAS_CENTER_X = this.CANVAS_WIDTH / 2;
    this.CANVAS_CENTER_Y = this.CANVAS_HEIGHT / 2;
  }

  widthMultiplier = (): number => {
    return this.CANVAS_HEIGHT > this.CANVAS_WIDTH
      ? this.CANVAS_HEIGHT / (this.state.radiusDivider * 100)
      : this.CANVAS_WIDTH / (this.state.radiusDivider * 100);
  };

  cancelAll = (): void => {
    const cancelAnimationFrame =
      window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    if (this.animationRequest !== null) {
      cancelAnimationFrame(this.animationRequest);
    }
    if (this.timerID !== null) {
      clearTimeout(this.timerID);
    }
  };

  initialize(canvasElem: HTMLCanvasElement): void {
    this.CANVAS_HEIGHT =
      canvasElem.parentElement?.clientHeight || this.state.canvasHeight;
    this.CANVAS_WIDTH =
      canvasElem.parentElement?.clientWidth || this.state.canvasWidth;
    canvasElem.setAttribute(`height`, this.CANVAS_HEIGHT + `px`);
    canvasElem.setAttribute(`width`, this.CANVAS_WIDTH + `px`);
    this.CANVAS_CENTER_X = this.CANVAS_WIDTH / 2;
    this.CANVAS_CENTER_Y = this.CANVAS_HEIGHT / 2;

    try {
      this.gl = canvasElem.getContext(
        `webgl`,
        webglOptions
      ) as WebGLRenderingContext;
    } catch (e) {
      console.log(`not supported` + e);
    }

    if (!this.gl) {
      this.state.webGLNotSupported = true;
      return;
    }

    this.setupGL(this.gl);
    this.renderBalls(this.state.ballCount);
    this.changeBackground();
    this.step();
  }

  step = (): void => {
    const requestAnimationFrame = window.requestAnimationFrame;

    const ballCount = this.state.ballCount;

    for (let i = 0; i < ballCount; i++) {
      const mb: MetaBallObject = this.metaBalls[i];
      mb.x += mb.vx;
      if (mb.x - mb.r < 0) {
        mb.x = mb.r + 1;
        mb.vx = Math.abs(mb.vx);
      } else if (mb.x + mb.r >= this.CANVAS_WIDTH) {
        mb.x = this.CANVAS_WIDTH - mb.r;
        mb.vx = -Math.abs(mb.vx);
      }
      mb.y += mb.vy;
      if (mb.y - mb.r < 0) {
        mb.y = mb.r + 1;
        mb.vy = Math.abs(mb.vy);
      } else if (mb.y + mb.r > this.CANVAS_HEIGHT) {
        mb.y = this.CANVAS_HEIGHT - mb.r;
        mb.vy = -Math.abs(mb.vy);
      }
    }
    const dataToSendToGPU = new Float32Array(3 * ballCount);
    for (let i = 0; i < ballCount; i++) {
      const baseIndex = 3 * i;
      const mb = this.metaBalls[i];
      dataToSendToGPU[baseIndex + 0] = mb.x;
      dataToSendToGPU[baseIndex + 1] = mb.y;
      dataToSendToGPU[baseIndex + 2] = mb.r;
    }
    this.gl?.uniform3fv(this.metaballsHandle, dataToSendToGPU);

    this.gl?.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);

    this.timerID = setTimeout(() => {
      this.animationRequest = requestAnimationFrame(this.step);
    }, 1000 / 60);
  };

  renderBalls = (n: number): void => {
    const { xSpeed, ySpeed } = this.state;

    for (let i = 0; i < n; i++) {
      const r = Math.max(50, Math.random() * 100 + 70) * this.widthMultiplier();
      this.metaBalls.push({
        key: i,
        x: this.CANVAS_CENTER_X + r,
        y: this.CANVAS_CENTER_Y + r,
        r,
        vx: Math.random() * xSpeed * this.choose([-1, 1]),
        vy: Math.random() * ySpeed * this.choose([-1, 1]),
      });
    }
  };
  setupGL = (gl: WebGLRenderingContext): void => {
    const ballCount = this.state.ballCount;
    const vertexShader = this.compileShader(
      `
      attribute vec2 position;

      void main() {
          gl_Position = vec4(position.x,position.y, 0.0, 1.0);
      }
      `,
      gl.VERTEX_SHADER,
      gl
    );

    const fragmentShader = this.compileShader(
      `
      precision highp float;
      uniform vec3 metaballs[${ballCount}];
      const float WIDTH = ${this.CANVAS_WIDTH}.0;
      const float HEIGHT = ${this.CANVAS_HEIGHT}.0;
      uniform vec4 bg_color;
      uniform vec4 metaball_color;
  
      void main(){
          float x = gl_FragCoord.x;
          float y = gl_FragCoord.y;
          float v = 0.0;
          for (int i = 0; i < ${ballCount}; i++) {
              vec3 mb = metaballs[i];
              float dx = mb.x - x;
              float dy = mb.y - y;
              float r = mb.z;
              v += r*r/(dx*dx + dy*dy) ;
          }
          if (v > 1.0) {
              gl_FragColor = vec4(metaball_color.x,y/HEIGHT,metaball_color.z ,  1.0);
          } else {
              gl_FragColor=bg_color;
          }
      }
      `,
      gl.FRAGMENT_SHADER,
      gl
    );

    const program: WebGLProgram = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertexData = new Float32Array([
      -1.0,
      1.0, // top left
      -1.0,
      -1.0, // bottom left
      1.0,
      1.0, // top right
      1.0,
      -1.0, // bottom right
    ]);
    const vertexDataBuffer: WebGLBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

    const positionHandle = this.getAttribLocation(program, `position`, gl);
    gl.enableVertexAttribArray(positionHandle);
    gl.vertexAttribPointer(
      positionHandle,
      2, // position is a vec2
      gl.FLOAT, // each component is a float
      false, // don't normalize values
      2 * 4, // two 4 byte float components per vertex
      0 // offset into each span of vertex data
    );

    this.metaballsHandle = this.getUniformLocation(program, `metaballs`, gl);
    this.bgColorUniformLocation = this.getUniformLocation(
      program,
      `bg_color`,
      gl
    );
    const metaballColorUniformLocation = this.getUniformLocation(
      program,
      `metaball_color`,
      gl
    );

    gl.uniform4f(this.bgColorUniformLocation, 0.1294, 0.1529, 0.2196, 1);

    gl.uniform4f(
      metaballColorUniformLocation,
      this.state.r,
      this.state.g,
      this.state.b,
      1
    );
  };

  changeBackground = (): void => {
    if (this.gl) {
      this.gl.uniform4f(this.bgColorUniformLocation, 0.1294, 0.1529, 0.2196, 1);
    }
  };

  getAttribLocation = (
    program: WebGLProgram,
    name: string,
    gl: WebGLRenderingContext
  ): number => {
    const attributeLocation = gl.getAttribLocation(program, name);
    if (attributeLocation === -1) {
      throw new Error(`Can not find attribute ` + name + `.`);
    }
    return attributeLocation;
  };

  getUniformLocation = (
    program: WebGLProgram,
    name: string,
    gl: WebGLRenderingContext
  ): WebGLUniformLocation => {
    const uniformLocation = gl.getUniformLocation(program, name);
    if (uniformLocation === -1 || uniformLocation === null) {
      throw new Error(`Can not find uniform ` + name + `.`);
    }
    return uniformLocation;
  };

  compileShader = (
    shaderSource: string,
    shaderType: number,
    gl: WebGLRenderingContext
  ): WebGLShader => {
    const shader: WebGLShader | null = gl.createShader(shaderType);
    if (!shader) {
      throw new Error(`Unable to create shader`);
    }
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(
        `Shader compile failed with: ` + gl.getShaderInfoLog(shader)
      );
    }

    return shader;
  };

  choose = (choices: Array<number>): number => {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  };
}

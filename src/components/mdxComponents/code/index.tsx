import { codeToHtml } from 'shiki'


interface Props {
    children: string
    className: string
  }
  
async function Code({children,className}: Props) {

    const out = await codeToHtml(children, {
      lang: className ? className.replace('language-', '') : 'text',
      theme: 'catppuccin-mocha',
    });
  
    return <div dangerouslySetInnerHTML={{ __html: out }} />;
}

export default Code;
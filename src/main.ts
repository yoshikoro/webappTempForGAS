/**
 * @description webapp Template entrypoint
 * @author yoshitaka <sato-yoshitaka@aktio.co.jp>
 * @date 2024-05-03
 * @param {GoogleAppsScript.Events.DoGet} e
 * @returns
 */
function doGet(e: GoogleAppsScript.Events.DoGet) {
  // entry point
  // e.parameter.paramName query param get
  // const pram1 = e.parameter.param1
  const htmlTemp = HtmlService.createTemplateFromFile("index");
  const outPut = htmlTemp.evaluate();
  outPut.setTitle("titlename");
  /* ファビコンを入れる予定 */
  //Google drive asset
  //https://drive.google.com/file/d//view?usp=drive_link
  /* outPut.setFaviconUrl("faviconurl"); */
  // add viewport for mobile
  outPut.addMetaTag("viewport", "width=device-width, initial-scale=1.0");
  // return after evaluate
  return outPut;
}

/**
 * @see https://qiita.com/kyamadahoge/items/5c916d57f2dce3693c26
 * @description html側からHTMLファイルをincludeする関数
 * @author yoshitaka <sato-yoshitaka@aktio.co.jp>
 * @date 2024-05-03
 * @param {*} filename
 * @param {*} params
 * @returns
 */
function include(filename: string, params: string) {
  const template = HtmlService.createTemplateFromFile(filename);
  if (params) {
    for (const key in params) {
      template[key] = params[key];
    }
  }
  return template.evaluate().getContent();
}

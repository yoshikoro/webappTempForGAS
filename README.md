# webappTempForGAS

webapp template for gas

## GAS でウェブアプリを LOCAL で構築する為のテンプレートです

### 使用しているソフト等

- VsCode(editor)
  - VsCode Extension: more(debug)
- TypeScript(js is also fine)
- Nodejs(npm or yarn)
  - @types/google-apps-script
  - Google/Clasp(global)
- git(use git bash)

### ざっくりとした流れ

src フォルダで開発 →  
dist フォルダが GAS へアップロードするファイルを入れるフォルダ →  
VsCode でデバッグする →  
nodeJs も使う場合を想定

### 使い方

Vscode をインストール（User インストールの場合は管理者権限は不要です）  
[Vscode](https://code.visualstudio.com/)  
nodejs(npm) をインストール(要管理者権限)  
[nodejs](https://nodejs.org/ja/)  
nodejs と一緒にインストールされますが一応  
[npm](https://www.npmjs.com/)  
git をインストール(要管理者権限)  
[git](https://git-scm.com/)  
3 点をインストール後に

```bash

#bash or powershell
# git bash を開いて下記のコマンドを打ち込みして下さい（コピペＯＫ）
git clone https://github.com/yoshikoro/webappTempForGAS.git
cd webappTempForGAS
npm install
code ./
#ここでVsCodeが開くのでそこから開発
```


# gottani

project for 2019 Web IoT Challenge Sapporo

## 概要

Node.jsとそのwebフレームワークであるExpress.jsを使っています。
各ディレクトリはExpress-Generatorによる自動生成で作りました。
あっち行ったりこっち行ったりとごちゃごちゃしていますが、大規模開発ではこういう配置がいいのかな？
この規模の開発では冗長すぎて様々な混乱を生みましたが、時間がなかったので押し進めたっていう形になってます…

※注意
機能を追加削除しながら急ピッチで作っていったので、いらないコードもちらほら散らばっています。

---

### 各ファイル(フォルダー)について

`bin/www` webサーバーを立てる記述がある。僕たちは3000番ポートを使った。wsでのソケット通信のことも追記してある。
`app.js` メインのアプリケーションを動かす。が、実際はエラーの処理をして、残りの処理は大分類をして`routes`に渡してるだけ。
`routes` (自動生成による`user.js`は使わなかった。)`index.js`に、どういうpathにどういうリクエストが送られたらあれこれしてね(ルーティング?)（renderでHTMLファイルを返す、など。）っていうのを書いてる。ここが一番カギかな。MVCモデルでいうC。(っていうかMないからVCだけだけど。)
`views` MVCのV。単純な"見た目"を収めているところ。気づいたと思うが中には.htmlではなく.hbsで入っている。これは、テンプレートエンジンにhbs(handlebars)を使ったためで、{{2重ブラケット}}で、上の`index.js`から`views`に動的に値が渡されている。
>`layout.hbs` ここで書いた見た目は他のすべてに継承される。HTMLの枠組みや、共通で表示させたいもの(メニューバーとか？)を書く。今回はここでCSS,JSの参照が書かれていて(他が無効に)つまづいてしまった。
> ここに雑多に転がっている他のファイルたちは参照されておらず、特に意味はない。開発中に置いてみただけ。
`public` 静的ファイル(CSS,Javascript,Image)は、ここにおいてあり、ここ参照してねーっていうのもどっかに書いてある。
`node_modules` npmでインストールしたやつらがいる。とくにいじる必要なし
`readme.md` このファイルである。MarkDown使ってみた。意外にきれいに見えてうれしい。

### NPMパッケージについて

今回のプロジェクトに必要なNPMパッケージは、`package.json`のdependenciesの中に全て記述してある(はず)です。
実際に動かしたいってなったらそいつがいる階層で`npm install -y`などを打つと全部インストールできるらしい。便利。
`body-parser`,`express`,`hbs`,`http`,`ws`などはバリバリ使いました。
公式リファレンスやGithubをよーく読むと使い方が分かってくる。
ソケット通信をよしなにやってくれる`socket.io`がうまく使えなくて少し残念だった。
ので、生ソケット通信の`ws`を所々使った。

#### やってみて感じたこと(byにしの)

・ググったりYoutube見てみればいい感じのやつ転がってる
・けどそれをただコピペしたら大体動かない
・エラーメッセージを読むことが重要
・チュートリアルとか見ると`app.js`一つでwebサーバー立ててルーティングもしてコントローラーも担ってるっていうパターンが多かった。
・フロントもバックも知るとなるほどなあってなったけど求められる知識量多すぎん？
・岡崎さんありがとうございました。

#### さらに

・データベースつなぎたかったね
・カメラ実装したかったね(てかwebrtc現状でβ版って発展途上な技術だったんだ…)
・Let's Smart Life

__IoT賞やったね！__
__みなさんお疲れ様＆ありがとうございました！！！__

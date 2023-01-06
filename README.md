## 1. GitHubのアカウント作ってログインしてください
https://github.com/

## 2. このレポジトリをforkします
1) forkボタンをクリック（画面右上らへんにある）  
[![Image from Gyazo](https://i.gyazo.com/1b47f144006cd3179cc3c2c93ec6cc75.png)](https://gyazo.com/1b47f144006cd3179cc3c2c93ec6cc75)

2) Create Forkボタンをクリック（画面下部らへんにある）  
[![Image from Gyazo](https://i.gyazo.com/74040e28ff522b2feb30430aadecf012.png)](https://gyazo.com/74040e28ff522b2feb30430aadecf012)

流れ)  
[![Image from Gyazo](https://i.gyazo.com/e8c648c47f9f23ca7164053a2a7fb0e6.gif)](https://gyazo.com/e8c648c47f9f23ca7164053a2a7fb0e6)

## 3. Codespaceをつくります
1) Codespacesにアクセスします  
https://github.com/codespaces

2) New codespaceボタンをクリックします（画面右上らへんにある）  
[![Image from Gyazo](https://i.gyazo.com/9bf44b3223e59f6f4c1527c60bc3dfbf.png)](https://gyazo.com/9bf44b3223e59f6f4c1527c60bc3dfbf)

3) Repositoryでforkした"hachikyu_fervent_robot"を選択します  
[![Image from Gyazo](https://i.gyazo.com/a9af958551155a38d41fa40ede00ce5b.png)](https://gyazo.com/a9af958551155a38d41fa40ede00ce5b)

4) Create codespaceをクリック  
[![Image from Gyazo](https://i.gyazo.com/cc641c51e24aa5438b2373ef3b2b037d.png)](https://gyazo.com/cc641c51e24aa5438b2373ef3b2b037d)

5) Codespaceの作成が完了するとエディタが開きます  
エディタ（プログラマがコード触るときに使うやつ)が開いたらCodespaceの作成が完了  
[![Image from Gyazo](https://i.gyazo.com/fa6e2ec2fb5557cc5659339c329124b8.png)](https://gyazo.com/fa6e2ec2fb5557cc5659339c329124b8)


流れ)  
[![Image from Gyazo](https://i.gyazo.com/a13a11087495a4e8900c63b856839109.gif)](https://gyazo.com/a13a11087495a4e8900c63b856839109)

## 4. ロボットのセットアップをします  
1) ターミナルを開きます  
エディタ左上のハンバーガーメニューを開きます  
View > Terminalを選択します  
[![Image from Gyazo](https://i.gyazo.com/8953acb017bdb0df979b24f75810daff.png)](https://gyazo.com/8953acb017bdb0df979b24f75810daff)  

ターミナルが開きます  
[![Image from Gyazo](https://i.gyazo.com/86c23fb7cb25035b54e3d9ac55a60b72.gif)](https://gyazo.com/86c23fb7cb25035b54e3d9ac55a60b72)  

2) ターミナルで以下のコマンドを実行します  
```
yarn install
```
[![Image from Gyazo](https://i.gyazo.com/7ec0e4db06cd13398290efa9afae0d82.gif)](https://gyazo.com/7ec0e4db06cd13398290efa9afae0d82)  
※初めてやるときは完了まで結構時間かかるかもしれません  

## 5. ロボットを動かします  
ターミナルで以下のコマンドを実行します  
```
node index.js
```
[![Image from Gyazo](https://i.gyazo.com/e43939c3c0920557744d730a885621b5.gif)](https://gyazo.com/e43939c3c0920557744d730a885621b5)  

正常に動作している場合は以下のようなログが出力されます(10秒おきに投票します)  
```
投票します...
投票しました: 1回目
投票しました: 2回目
投票しました: 3回目
投票しました: 4回目
投票しました: 5回目
投票しました: 6回目
```


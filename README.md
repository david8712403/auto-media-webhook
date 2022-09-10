# Auto Media Webhook Server

- [Express + Typescript Template](#express--typescript-template)
- [Init Project](#init-project)
- [Environment Variable](#environment-variable)

# 緣起

為 Auto Media 的 callback server，在 Auto Media 設定好 webhook 網址後，可以自定義收到訊息後要執行的步驟

例如:

- 儲存多媒體檔案
- 儲存 webhook 紀錄
- etc.

# Init Project

- Add dependencies for develop
  ```shell
  yarn global add ts-node-dev ts-node typescript && yarn
  ```

# Environment Variable

| Variable         | Description                  | Example     |
| ---------------- | ---------------------------- | ----------- |
| `PORT`           | Server 運行 port             | 3000        |
| `WEBHOOK_SECRET` | webhook request 夾帶的 token | `ad8...8ec` |

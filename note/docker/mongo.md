---
title : 快速架設MongoDB
slug : docker-mongo
tags : [docker , mongoDB]
date : 2022-09-16
---

## 前言

在很多時候會想要快速setup一個可以用的database例如mongoDB或是postgreSQL，但手邊的環境不一定有而且又懶得下載或使用雲服務時，就很適合使用docker快速setup! 

選擇docker的原因

- 輕巧且方便

- 可以有一致性，相同的設定下你可以保證環境是一致的

- 刪除時非常簡單，把容器刪掉就完事了！

介紹完原因後 本篇只介紹MongoDB方面，未來若有機會再寫其他database的qq

#### 要求

-  已經下載docker！

- 最好有使用過mongoDB！

## 使用container

先從最基本的方式開始！

```shell
docker run --name db mongo
```

這樣會執行一個最新版本的mongodb，並命名容器為db(可以自取)方便管理

(若之前並未下載過 mongodb的映像檔, `docker run` 也會自動幫你下載)

但是這個指令還有很多東西可以再進步

例如我們其實多數不需要使用terminal與 db server互動

因此可以用`-d`來表達detached，使那個container變為background process 。

除此之外，我們也可以標記特定版本的mongoDB而非自動使用最新版

```shell
docker run --name db -d mongo:4.1
```

(以背景程式執行4.1版本的mongoDB)

### 調配port

到現在我們其實還忽略了一個很嚴重的問題，我們該怎麼存取這個server，mongoDB雖然是在27017 port上，但是他所在的port是container裡的27017而非本機上的27017，因此其他在本機上的app無法存取，因此我們還需要使用`-p`配置一個port給他

```shell
docker run --name db -d -p 27017:27017 mongo
```

(將本機的27017連結container裡的27017)

這時候若有下載mongo compass就可以連上去看看有沒有東東了！

### 保存資料！

在前面有說到，要刪除是非常簡單的，因為我們是透過容器來創建，因此只要刪除容器裡面的資料也會跟著一起刪除，但如果我想保存這些資料呢？這時候就可以使用`-v`將選定的資料夾掛載到本機的檔案系統上！

```shell
docker run --name db -d -p 27017:27017 -v \
<path to local dir>:/data/db mongo
```

(將container內的/data/db掛載到指定的path中)

### 環境變數

如果我們想要設定root user 也可以透過環境變數`-e`的方式設定，當然也有其他設定方式，不過那應該是之後的事ㄌㄅ0.0

```shell
docker run --name db -d -p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=hcc \
-e MONGO_INITDB_ROOT_PASSWORD=2771 \
mongo
```

## end 

這篇大概就到這邊了，因為摸索到這邊已經夠我使用一陣子了，不過還有看到一些進階的像是docker network,compose等等，有機會使用到的話再回頭更新ㄅ

### 相關資源

[官方教學](https://www.mongodb.com/compatibility/docker)



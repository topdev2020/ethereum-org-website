---
title: A Beacon Chain
description: Tudj meg többet a beacon chainről - az Ethereum első nagy Eth2 fejlesztéséről.
lang: hu
template: eth2
sidebar: true
image: ../../../../../assets/eth2/core.png
summaryPoints:
  [
    "A beacon chain nem változtatja meg azt, ahogy az Ethereumot ma használjuk.",
    "A hálózatot fogja koordinálni.",
    "Bevezeti a proof-of-stake rendszert az Ethereum ökoszisztémába.",
    'A technikai ütemtervekben "Fázis 0"-ként is ismerheted.',
  ]
---

<UpgradeStatus isShipped date="Shipped!">
    A Beacon Chain december 1.-jén központi idő szerint délben indult el. További információért <a href="https://beaconscan.com/">nézd meg az adatokat</a>. Ha szeretnél segíteni a lánc érvényesítésében, akkor <a href="/eth2/staking/">letétbe tudod helyezni az ETH-edet</a>.
</UpgradeStatus>

## Mit csinál a Beacon Chain? {#what-does-the-beacon-chain-do}

A Beacon Chain fogja koordinálni vagy vezetni a [shardokból](/eth2/shard-chains/) és [stakerekből](/eth2/staking/) álló kiterjesztett hálózatot. De nem olyan lesz, mint jelenleg az [Ethereum főhálózat](/glossary/#mainnet). Nem fog tudni számlákat vagy okosszerződéseket kezelni.

A Beacon Chain szerepe meg fog változni idővel, de egy olyan alapvető összetevője [ a biztonságos, fenntartható és skálázható Ethereumnak, amiért dolgozunk](/eth2/vision/).

## Beacon Chain tulajdonságok {#beacon-chain-features}

### Letétbe helyezés bevezetése {#introducing-staking}

A Beacon Chain bevezeti [proof-of-stake-et](/developers/docs/consensus-mechanisms/pos/) az Ethereum rendszerbe. Ez egy új módja annak, hogy elősegítsd az Ethereum biztonságát. Gondolj rá úgy, mint egy közjóra, ami egészségesebbé teszi az Ethereumot és közben még több ETH-et tudsz szerezni. A gyakorlatban ez úgy néz ki, hogy ETH-ot helyezel letétbe a validátor szoftver aktiválásához. Validátorként tranzakciókat fogsz feldolgozni és új blokkokat hozol létre a láncon.

A letétbe helyezés és a validátorrá válás egyszerűbb, mint a [bányászat](/developers/docs/mining/) (ahogy jelenleg biztosítva van a hálózat). És remélhetőleg hosszútávon még biztonságosabbá teszi majd az Ethereumot. Minél több ember vesz részt a hálózatban, annál inkább decentralizáltabb és biztonságosabb lesz a támadásokkal szemben.

<InfoBanner emoji=":money_bag:">
Ha érdekel a letétbe helyezés és szeretnél segíteni a Beacon Chain biztosításában, akkor <a href="/eth2/staking/">tudj meg többet a letétbe helyezésről</a>.
</InfoBanner>

Ez a második Eth2 fejlesztésnél is fontos változás: [a shard láncoknál](/eth2/shard-chains/).

### Shard láncok előkészítése {#setting-up-for-shard-chains}

A shard láncok bevezetése lesz a második nagy Eth2 fejlesztés. Növelni fogják a hálózat kapacitását és a tranzakciós sebességet úgy, hogy 64 blokklánccal terjesztik ki a hálózatot. A Beacon Chain egy fontos első lépés a shard láncok bevezetésénél, mivel biztonságos működésükhöz a letétbe helyezés működése szükséges.

Végsősoron a Beacon Chain lesz felelős azért, hogy véletlenszerűen kijelöljön letétbe helyezőket (stakereket) a shard láncok validálására. Ez kulcsfontosságú annak érdekében, hogy a letétbe helyezők ne fogjanak össze és ne tudják átvenni a hatalmat egy shard fölött. Nos, ez azt jelenti, hogy [kevesebb, mint 1 a billióhoz az esélye, hogy ez bekövetkezzen](https://medium.com/@chihchengliang/minimum-committee-size-explained-67047111fa20).

## A fejlesztések közötti kapcsolat {#relationship-between-upgrades}

Az Eth2 fejlesztések némileg összefüggnek. Foglaljuk össze tehát, hogy a Beacon Chain hogyan hat a többi fejlesztésre.

### Shardok és a Beacon Chain {#shards-and-beacon-chain}

A shard láncokat csak a proof-of-stake konszenzus mechnanizmussal lehet biztonságosan bevezetni az Ethereum ökoszisztémába. A Beacon Chain bevezeti a letétbe helyezést (staking) ezzel lekövezve a shard láncok bevezetéséhez szükséges utat.<ButtonLink to="/eth2/shard-chains/">Shard láncok</ButtonLink>

### Főhálózat és a Beacon Chain {#mainnet-and-beacon-chain}

A Beacon Chain eleinte különállóan fog létezni az Ethereum főhálózattól, melyet ma is használunk. De végül össze lesznek kapcsolva. A terv a főhálózat “dokkolása” a proof-of-stake rendszerhez, melyet a Beacon Chain vezérel és koordinál.<ButtonLink to="/eth2/merge/">A dokkolás</ButtonLink>

<Divider />

## Beacon Chain interakció {#interact-with-beacon-chain}

<Eth2BeaconChainActions />

---
title: Főhálózat dokkolása az Eth2-vel
description: Tudj meg többet a dokkolásról - amikor a főhálózati Ethereum csatlakozik a Beacon Chain által koordinált proof-of-stake rendszerhez.
lang: hu
template: eth2
sidebar: true
image: ../../../../../assets/eth2/merge.png
summaryPoints:
  [
    'Végül a jelenlegi Ethereum főhálózat "dokkolni" fog a többi Eth2 fejlesztéssel együtt.',
    'A dokkolás egyesíti az "Eth1" főhálózatot a Beacon Chainnel és a sharding rendszerrel.',
    "Ez a proof-of-work végét jeleni majd az Ethereumot tekintve, és a teljes átmenetet a proof-of-stake-be.",
    "Úgy is ismerheted, mint a Fázis 1.5 a technikai ütemtervek szerint.",
  ]
---

<UpgradeStatus date="~2021/22">
    Ezt a fejlesztést a shard láncok eljövetele fogja követni. De ez lesz az a pillanat, amikor az <a href="/eth2/vision/">Eth2 vízió</a> teljesen megvalósul – nagyobb skálázhatóság, biztonság és fenntarthatóság valamint letétbe helyezés, mely a teljes hálózatot biztosítja.
</UpgradeStatus>

## Mi az a dokkolás? {#what-is-the-docking}

Fontos megjegyezni, hogy eredetileg a többi Eth2 fejlesztés a [főhálózattól](/glossary/#mainnet) - azaz a lánctól, amit ma is használunk - külön kerül bevezetésre. Az Ethereum főhálózat biztonságát továbbra is a [proof-of-work](/developers/docs/consensus-mechanisms/pow/) szolgáltatja majd, még akkor is amikor [a Beacon Chain](/eth2/beacon-chain/) és a [shard láncok](/eth2/shard-chains/) párhuzamosan futnak majd a [proof-of-stake](/developers/docs/consensus-mechanisms/pos/) használatával. A dokkolás az, amikor ez a két rendszer egybeolvad.

Képzeld el, hogy az Ethereum egy űrhajó, ami még nem teljesen áll készen egy csillagközi utazásra. A Beacon Chainnel és a shard láncokkal a közösség egy új hajtóművet és egy erősebb hajótestet épített. Ha eljön az idő, a meglévő hajó dokkol ezzel az új rendszerrel, eggyé válik vele és készen áll arra, hogy néhány fényév alatt meghódítsa az univerzumot.

## A főhálózat dokkolása {#docking-mainnet}

Amikor minden készen áll, az Ethereum főhálózat "bedokkol" a Beacon Chainnel, a saját shardjává válik, amely proof-of-stake-et használ [proof-of-work](/developers/docs/consensus-mechanisms/pow/) helyett.

A főhálózat lehetővé teszi majd az okosszerződések futtatását a proof-of-stake rendszeren, valamint magával hozza a jelenlegi Ethereum állapotot és történetet, ezzel biztosítva, hogy az összes ETH tulajdonos és felhasználó számára elakadásmentes legyen az átállás.

<!-- ### Improving mainnet

Before mainnet docks with the new eth2 system, it’s probably worthwhile sorting some of the issues that are in flight – often referred to as Ethereum1.x.

These include Improvements for

- **End users**: like [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) which changes the way users bid for blockspace. In other words, making transaction fees more efficient for end users.
- **Client runners**: making running clients more sustainable by capping disk space requirements.
- **Developers**: upgrading the EVM to be more flexible.

Plus many more.

[More on Ethereum1.x](/en/learn/#eth-1x)

These improvements all have a place in Eth2 so it’s likely that their progress may affect the timing of the docking. -->

## A dokkolás után {#after-the-docking}

Ez a proof-of-work végét és egy fenntarthatóbb, környezetbarátabb korszak kezdetét fogja jelenteni az Ethereum számára. Ettől a ponttól kezdve az Ethereum skálázható, biztonságos és fenntartható lesz, ahogy az az [Eth2 vízió](/eth2/vision/) szerint körvonalazódott.

## A fejlesztések közötti kapcsolat {#relationship-between-upgrades}

Az Eth2 fejlesztések némileg összefüggnek. Foglaljuk össze tehát, hogy a dokkolás hogyan hat a többi fejlesztésre.

### Dokkolás és a Beacon Chain {#docking-and-beacon-chain}

Amint megtörtént a dokkolás, a letétbe helyezőket kijelölik az Ethereum főhálózat validálására. Csakúgy, mint a shard láncoknál. [A bányászat](/developers/docs/consensus-mechanisms/pow/mining/) így feleslegessé válik, tehát a bányászok az új proof-of-stake rendszerben valószínűleg letétbe helyezésbe fektetik majd, amit kerestek.<ButtonLink to="/eth2/beacon-chain/">A Beacon Chain</ButtonLink>

### Dokkolás és shard láncok {#docking-and-shard-chains}

Mivel a főhálózat egy sharddá válik, a shard láncok sikeres implementációja kritikus ezen fejlesztési lépés szempontjából. Valószínű, hogy az átmenet egy fontos szerepet fog játszani, hogy a közösség eldöntse szeretne-e egy második sharding fejlesztést. Ez a fejlesztés a többi shardot is a főhálózathoz hasonlóvá teszi: képesek lesznek tranzakciókat és okosszerződéseket feldolgozni, nem csak több adatot biztosítani.<ButtonLink to="/eth2/shard-chains/">Shard láncok</ButtonLink>

---
layout: post
title: Choosing an Integer as Primary Key in Relational Database
---

## The case

I found bugs in the modules I created with our in-house CRUD builder.
It turned out that those tables with `VARCHAR` type as primary key couldn't be updated.
Supposedly, primary keys can be of any type as long as they are unique.
But our CRUD builder doesn't allow non-auto-increment primary keys.

I didn't mind changing my schema but I was curious on why I should use auto-increment integer as primary keys.
After some googling, here's what I learned...

## TIL

Why an integer is a better choice for the primary key (i.e. a surrogate key)?

1. Integer is small. PK must be indexed for faster search. The more compact the primary key, the more efficient the management of the index.
2. Again, integer is small as foreign keys. Having small keys everywhere minimizes database size.
3. It's headache-proof. Neither user nor programmer has to come up with primary keys with some logic in defining it. The key is auto-incremented.
4. Most stable. There's no reason to change the value as it has no meaning/logic associated with it. Otherwise, changing primary keys results in changing all the foreign keys and it is an expensive process.

## The other option

Choosing natural keys (e.g. product code, country code) with types like `VARCHAR` is definitely possible.
But the memory and maintenance costs of it don't justify it.

---

Hi, thanks for stopping by. I guess I will post snippets of my TIL here today onward. It serves as a one-stop portal for what I learned.
Feel free to look around.

-`d0ct0r4r6a`-

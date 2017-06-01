---
layout: post
title: Belajar Perintah Linux
---

## Kuis Mingguan

Setiap Jumat pukul 10.00 WIB, kami, tim Praja, mempunyai sesi yang disebut "Kuis Mingguan". Programmer-programmer tim Praja berkumpul dalam satu ruangan dan membahas topik seputar dunia pemrograman. Satu minggu sebelumnya, topik akan diberikan bersama dengan tugas yang harus kami selesaikan dalam waktu satu minggu.

## Perintah Linux

Pada kuis kali ini, tim Praja mempelajari perintah-perintah Linux yang dapat membantu kami dalam pekerjaan. Nah, walaupun perintah-perintah ini dapat di *googling* dan sudah banyak di blog-blog lain, aku akan menuliskan hasil pembelajaranku disini. Aku menggunakan *Bash on Windows* agar dapat menjalankan perintah bash pada sistem operasi Windows 10.

Aku sendiri sebelumnya tidak banyak tahu tentang perintah di `bash` , mungkin karena sudah terbiasa dengan PowerShell Windows, jadi hanya tahu perintah yang ada di kedua shell (Contoh: `ls`, `pwd`, `cd`).

OK. Mari kita simak tugasnya.

## Tugas / TIL

- Mengetahui folder saat ini: `pwd`

![Perintah `pwd`][pwd]

- Mengetahui sisa space: `df`
  
  Flag yang berguna:
  - -h : output ukuran dengan satuan
  - -l : output hanya *file system* lokal
  - -t : output hanya tipe *file system* tertentu
  - -T : output dengan tipe *file system*

![Perintah `df`][df]

- Mengetahui ukuran folder saat ini: `du -sh`

  Flag yang berguna:
  - -s : total ukuran folder saat ini (sama dengan -d 0)
  - -d : total untuk folder dengan kedalaman N dari folder saat ini
  - -h : ukuran dengan satuan

![Perintah `du`][du]

- Mengetahui ukuran folder tertentu: `du DIRECTORY`

- File permission: `stat -c %A FILE/DIRECTORY`

  Flag yang berguna:
  - -t : format satu baris
  - -c : output sesuai format. Format yang berguna:
    - %A : permission dalam format manusia
    - %a : permission dalam format oktal

![Perintah `stat`][stat]

- Change file permission: `chmod PERMISSION FILE/DIRECTORY`

  Flag yang berguna:
  - -R : mengubah permission secara rekursif

![Perintah `chmod`][chmod]

- Create folder: `mkdir DIRECTORY`

  - -p : membuat folder dalam folder

![Perintah `mkdir`][mkdir]

- File operation (copy, copy recursive, move, delete, delete folder)
  - copy (recursive)  : `cp [-arf] SOURCE DEST`
      - -a : _copy_ dengan atribut yang sama
      - -r : rekursif
      - -f : paksa _copy_
  - move/rename : `mv SOURCE DEST`
  - delete (recursive) : `rm [-rf] FILE/DIRECTORY`
  - delete directory   : `rmdir`

![File operations][file_operation]

- upload file from local to remote (sftp, scp)

  1. Jalankan `sftp`
  2. `put SOURCE DEST`

- download file from remote to local (sftp, scp)

  1. Jalankan `sftp`
  2. `get SOURCE DEST`

- synchronize file/folder between to location : `rsync SOURCE DEST`

  Flag yang berguna:
  - -a  : sinkron dengan symlink, hak permisi
  - -z  : mengurangi beban transfer
  - -P  : menampilkan progres dan mengaktifkan --partial
  - --delete : menghapus file yang tidak terdapat pada source
  - --partial : mengizinkan rsync parsial, yaitu dapat berhenti/mulai di tengah proses `rsync`

-  mengetahui fungsi `wc`

    Flag yang berguna:
    - -c  : jumlah byte
    - -m  : jumlah karakter (termasuk newline)
    - -w  : jumlah kata
    - -l  : jumlah baris
    - -L  : panjang dari baris terpanjang

- mengenali ttg chaining operation (|, >, >>, <, <<)

  - | : pipe
  - \> : _redirect_ stdout
  - \>> : _redirect_ dan _append_ stdout
  - < : _redirect_ stdin
  - << : _redirect_ dan _append_ stdin

- mengetahui jumlah file dalam folder dgn chain 2 command:
  `ls | wc -l`

- mengetahui jumlah kata dalam file:
  `wc -w`

- mengetahui fungsi `grep`, `sed`, `awk`
  - `grep`    : menemukan konten yang cocok dengan pola yang dicari
  - `sed`     : mengubah aliran stdin dan mengembalikan hasilnya ke stdout
  - `awk`     : filter custom

- menggunakan fungsi grep sebagai chain dari fungsi lain
  `ls | grep .php`

## Ekstra

- menampilkan informasi pengguna sekarang : `id`

  Flag yang berguna:
  - -g : group
  - -G : gid
  - -u : user

- menampilkan isi file teks : `less`



<!--Image references-->
[pwd]:{{site.baseurl}}img/20170602/pwd.png
[df]:{{site.baseurl}}img/20170602/df.png
[du]:{{site.baseurl}}img/20170602/du.png
[stat]:{{site.baseurl}}img/20170602/stat.png
[chmod]:{{site.baseurl}}img/20170602/chmod.png
[mkdir]:{{site.baseurl}}img/20170602/mkdir.png
[file_operation]:{{site.baseurl}}img/20170602/file_operation.png





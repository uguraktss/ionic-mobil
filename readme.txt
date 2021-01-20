Mobil Programlama  DÖVİZ APP

Uğur Aktaş 180201129


Bu readme.txt dosyası "Akıllı Telefonlar ile DÖVİZ APP" koduna aittir.

1-Paket İçeriği
readme.txt - Uygulamanın nasıl çalıştırılacağını gösteren dosya
ionic-mobil-master.zip- Kaynak kodların  sıkıştırılmış hali 

-----------------------------
2-Sistem Gereksinimleri

Program ionic ile yapılmıştır.
Uygulama Visual Studio Code IDE kullanılarak geliştirilmiştir.
Bulut platformu olarak FireBase kullanılmıştır.

-----------------------------
3-Kurulum
-npm install // gerekli kütüphanelerinin yüklenmesi
-ionic serve --lab//projenin çalıştırılması 


"Visual Studio Code IDE" geliştirme ortamının bilgisayarınıza uygun olan sürümünü kurabilirsiniz.
Ayrıca bilgisayarınız "İONİC" kurmalısınız.
https://ionicframework.com/docs/intro/cli buradan gerekli yükleme adımlarını takip edebilirsiniz.
Program, herhangi bir hata vermeden ve daha önce belirlenen kriterlere uygun çalıştı.
Windows harici bir sistemde çalıştırılmak istenirse, kodun çalıştırılacağı sisteme uygun bir şekilde düzenlenmesi gerekebilir.

-----------------------------
Anlatım
android firebase için kendi kayıtınızı oluşturun
UI Login: Kullanıcı email adresi ve şifresini girerek giriş yapabilir 
Auth işlemleri için firebase kullanılmıştır.
Register: Kullanıcı email ve şifresini girerek kayıt olabilir. Auth işlemleri için firebase kullanılmıştır 
all-currency Bu ekranda Apiden gelen döviz değerleri listelenmektedir 168 adet para birimi listelenmektedir bir button olarak
tutuluyorlar her kullanıcının kendine özel my-currency sayfası var kullanıcılar kendilerine göre takip ettikleri para birimlerini 
my-currency ye eklebilirler
Git commitleri üzerinden gerekli geliştirmlerin adımları takip edilebilir.....
-------------------------------
Resimler
Kayıt ve kullanıcı girişinin bulunduğu ekran
Kullanıcı giriş yapacağı sırada firebase'de daha önce böyle bir kayıt olup olmadığını kontrol edip daha sonra giriş imkanı sunar.
Eğer kullanıcı üye olacaksa yine firebase vasıtasıyla yeni kayıt açar.
![img1](https://github.com/uguraktss/ionic-mobil/blob/master/1.png)

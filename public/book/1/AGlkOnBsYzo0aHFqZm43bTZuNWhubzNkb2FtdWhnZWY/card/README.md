### card

この書籍の`第一版`にはリアルカードが付属しています。

全3種類のうち1枚がランダムで当たります。

|card|%|
|---|---|
|龍卵|14/20|
|青空|5/20|
|???|1/20|

#### ランダムの仕組み

発送順の数字とカードの数字が紐付けられています。

この情報は暗号化され公開されています。

```sh:/card/book_0_public.pem
-----BEGIN CERTIFICATE-----
MIIC4TCCAcmgAwIBAgIUS5jY7UgomgdXw17v9c1DPCjFd78wDQYJKoZIhvcNAQEL
BQAwADAeFw0yMzA3MjMwOTE1MTVaFw0yMzA4MjIwOTE1MTVaMAAwggEiMA0GCSqG
SIb3DQEBAQUAA4IBDwAwggEKAoIBAQDJktVVRo5n2GvwwJFSeKGj7tnQsCTDLSpr
1Q62zwXh4VsgGjoyo5+2QfXwQourEfDW/up4yG5YrO7m0utc0PF0DQKbsnzeqdkg
HWMUAiZGk1qI9QFE9jSs2O+O5+tljHQYxLNhHfcQ+dIF0kUWDpVer0k1t4xc4HjJ
xvlUUEfOybMe2D44vLSjMWNcf61yzTkJWuMEn/ICK6/WzhH/1fGqn56F93s/Lo1B
lc514Cioa9MMsLFb91wTqNPkoF3QHz4GuOC+DxHz5cKi9TtdztQ33Kh372hU4Lkf
VXi8/61aKxLWbaly9UISJLbNgBkyX8pEtZRzwVmm8dVTr5Sh/a7DAgMBAAGjUzBR
MB0GA1UdDgQWBBSHTOQhmfrn2ENIjPscI8ZFINFTdTAfBgNVHSMEGDAWgBSHTOQh
mfrn2ENIjPscI8ZFINFTdTAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUA
A4IBAQAqa8d/wkBWzB6xBgD9GBewnKrstxoLg8K0fcxfIUS1EeBchkdpepeq6UkG
blrHjibfPwFJ822oSy71vUTNcPt1Hpdp93xrz7DBD3Q5EdLsgJNH65vDA0KJK9nj
UfTYvU4Wt4xL9DxL/WqDsbNFPkNaztGWtZG41nFRKuGj0714e9G3RiImWjO8mFpg
OI+/qQKlF6DdDXjuzNJJ7QDZ4gsxg5HqmCc8OjQRWDuVhJrvS4JH2O+4TH591CPA
VrSPWuw6kSAbY7iVNXlpAOWM6jGOu37ZEdyhlmYpXGG7SbX2lswUoIqkm8eovjHt
RYI2FkFATbwxAdNp9aNFdamFKF+s
-----END CERTIFICATE-----
```

<a href="/card/book_0.enc" target="_blank">encrypt</a>

すべての発送が決まった段階で<a href="/card/book_0_private.pem" target="_blank">秘密鍵</a>が公開され、復号化できるようになります。

```sh:認証手順
pri=book_0_private.pem
enc=book_0.enc
openssl smime -decrypt -in $enc -binary -inform DEM -inkey $pri
```

```sh:作成手順
f=book_0.json
pri=book_0_private.pem
pub=book_0_public.pem
enc=book_0.enc
openssl req -x509 -nodes -newkey rsa:2048 -keyout $pri -out $pub -subj '/'
openssl smime -encrypt -aes256 -in $f -binary -outform DEM -out $enc $pub
openssl smime -decrypt -in $enc -binary -inform DEM -inkey $pri
```

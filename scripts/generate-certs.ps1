$certsDir = Join-Path $PSScriptRoot "..\nginx\certs"
if (!(Test-Path $certsDir)) {
    New-Item -ItemType Directory -Force -Path $certsDir
}

$certsDirResolved = (Resolve-Path $certsDir).Path
$openssl = "C:\Program Files\Git\usr\bin\openssl.exe"
$cnfFile = Join-Path $certsDir "openssl-san.cnf"

# Write openssl configuration with SAN (Subject Alternative Name)
$cnfContent = @"
[req]
default_bits = 2048
prompt = no
default_md = sha256
req_extensions = req_ext
distinguished_name = dn

[dn]
C = TH
ST = Chiang Rai
L = Chiang Rai
O = CRRU
OU = Social Sciences
CN = social.crru.ac.th

[req_ext]
subjectAltName = @alt_names

[alt_names]
DNS.1 = social.crru.ac.th
DNS.2 = localhost
IP.1 = 127.0.0.1
"@

Set-Content -Path $cnfFile -Value $cnfContent -Force

# Generate private key and certificate
& $openssl req -x509 -nodes -days 365 -newkey rsa:2048 `
  -keyout (Join-Path $certsDir "social.crru.ac.th.key") `
  -out (Join-Path $certsDir "social.crru.ac.th.crt") `
  -config $cnfFile `
  -extensions req_ext

# Clean up configuration file
if (Test-Path $cnfFile) {
    Remove-Item -Path $cnfFile -Force
}

Write-Host "SSL Certificates successfully generated at: $certsDirResolved"

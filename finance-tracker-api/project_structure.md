# Project Structure: finance-tracker-api

## Directory Structure

- 📄 Dockerfile
- 📄 compose.yml
- 📄 mvnw
- 📄 mvnw.cmd
- 📄 pom.xml
- 📁 src/
  - 📁 main/
    - 📁 java/
      - 📁 com/
        - 📁 tamthong/
          - 📁 finance_tracker_api/
            - 📄 FinanceTrackerApiApplication.java
            - 📁 config/
              - 📄 ApplicationConfig.java
              - 📄 CategoryDataLoader.java
              - 📄 DataSeeder.java
              - 📄 DateConfig.java
              - 📄 WebConfig.java
            - 📁 constants/
              - 📄 SettingsConstants.java
            - 📁 controller/
              - 📄 AuthController.java
              - 📄 BudgetController.java
              - 📄 CategoryController.java
              - 📄 DashboardController.java
              - 📄 DemoDataController.java
              - 📄 SavingsGoalController.java
              - 📄 TestController.java
              - 📄 TransactionController.java
              - 📄 UserSettingsController.java
            - 📁 dto/
              - 📄 BudgetDTO.java
              - 📄 CategoryDTO.java
              - 📄 SavingsGoalDTO.java
              - 📄 TransactionDTO.java
              - 📄 UserDTO.java
              - 📄 UserSettingsDTO.java
              - 📁 dashboard/
                - 📄 AlertDTO.java
                - 📄 DashboardOverviewDTO.java
                - 📄 ExpenseByCategoryDTO.java
                - 📄 SpendingTrendDTO.java
              - 📁 request/
                - 📄 AuthResponse.java
                - 📄 LoginRequest.java
                - 📄 RegisterRequest.java
                - 📄 UserSettingsRequests.java
            - 📁 exception/
              - 📄 ErrorResponse.java
              - 📄 GlobalExceptionHandler.java
              - 📄 ResourceNotFoundException.java
              - 📄 UserAlreadyExistsException.java
            - 📁 mapper/
              - 📄 BudgetMapper.java
              - 📄 SavingsGoalMapper.java
              - 📄 TransactionMapper.java
              - 📄 UserMapper.java
            - 📁 model/
              - 📄 Budget.java
              - 📄 BudgetPeriod.java
              - 📄 Category.java
              - 📄 CategoryType.java
              - 📄 Role.java
              - 📄 SavingsGoal.java
              - 📄 Transaction.java
              - 📄 TransactionStatus.java
              - 📄 TransactionType.java
              - 📄 User.java
              - 📄 UserSettings.java
            - 📁 repository/
              - 📄 BudgetRepository.java
              - 📄 CategoryRepository.java
              - 📄 SavingsGoalRepository.java
              - 📄 TransactionRepository.java
              - 📄 UserRepository.java
              - 📄 UserSettingsRepository.java
            - 📁 security/
              - 📄 JwtAuthenticationFilter.java
              - 📄 JwtService.java
              - 📄 SecurityConfig.java
            - 📁 service/
              - 📄 AuthService.java
              - 📄 BudgetService.java
              - 📄 CategoryService.java
              - 📄 CustomUserDetailsService.java
              - 📄 DashboardService.java
              - 📄 SavingsGoalService.java
              - 📄 TransactionService.java
              - 📄 UserService.java
              - 📄 UserSettingsService.java
    - 📁 resources/
      - 📄 application.properties
  - 📁 test/
    - 📁 java/
      - 📁 com/
        - 📁 tamthong/
          - 📁 finance_tracker_api/
            - 📁 service/
              - 📄 BudgetServiceTest.java
              - 📄 TransactionServiceTest.java
              - 📄 UserServiceTest.java
              - 📄 UserSettingsServiceTest.java

## File Contents

### 📄 mvnw.cmd

```
<# : batch portion
@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    http://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script, version 3.3.2
@REM
@REM Optional ENV vars
@REM   MVNW_REPOURL - repo url base for downloading maven distribution
@REM   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
@REM   MVNW_VERBOSE - true: enable verbose log; others: silence the output
@REM ----------------------------------------------------------------------------

@IF "%__MVNW_ARG0_NAME__%"=="" (SET __MVNW_ARG0_NAME__=%~nx0)
@SET __MVNW_CMD__=
@SET __MVNW_ERROR__=
@SET __MVNW_PSMODULEP_SAVE=%PSModulePath%
@SET PSModulePath=
@FOR /F "usebackq tokens=1* delims==" %%A IN (`powershell -noprofile "& {$scriptDir='%~dp0'; $script='%__MVNW_ARG0_NAME__%'; icm -ScriptBlock ([Scriptblock]::Create((Get-Content -Raw '%~f0'))) -NoNewScope}"`) DO @(
  IF "%%A"=="MVN_CMD" (set __MVNW_CMD__=%%B) ELSE IF "%%B"=="" (echo %%A) ELSE (echo %%A=%%B)
)
@SET PSModulePath=%__MVNW_PSMODULEP_SAVE%
@SET __MVNW_PSMODULEP_SAVE=
@SET __MVNW_ARG0_NAME__=
@SET MVNW_USERNAME=
@SET MVNW_PASSWORD=
@IF NOT "%__MVNW_CMD__%"=="" (%__MVNW_CMD__% %*)
@echo Cannot start maven from wrapper >&2 && exit /b 1
@GOTO :EOF
: end batch / begin powershell #>

$ErrorActionPreference = "Stop"
if ($env:MVNW_VERBOSE -eq "true") {
  $VerbosePreference = "Continue"
}

# calculate distributionUrl, requires .mvn/wrapper/maven-wrapper.properties
$distributionUrl = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionUrl
if (!$distributionUrl) {
  Write-Error "cannot read distributionUrl property in $scriptDir/.mvn/wrapper/maven-wrapper.properties"
}

switch -wildcard -casesensitive ( $($distributionUrl -replace '^.*/','') ) {
  "maven-mvnd-*" {
    $USE_MVND = $true
    $distributionUrl = $distributionUrl -replace '-bin\.[^.]*$',"-windows-amd64.zip"
    $MVN_CMD = "mvnd.cmd"
    break
  }
  default {
    $USE_MVND = $false
    $MVN_CMD = $script -replace '^mvnw','mvn'
    break
  }
}

# apply MVNW_REPOURL and calculate MAVEN_HOME
# maven home pattern: ~/.m2/wrapper/dists/{apache-maven-<version>,maven-mvnd-<version>-<platform>}/<hash>
if ($env:MVNW_REPOURL) {
  $MVNW_REPO_PATTERN = if ($USE_MVND) { "/org/apache/maven/" } else { "/maven/mvnd/" }
  $distributionUrl = "$env:MVNW_REPOURL$MVNW_REPO_PATTERN$($distributionUrl -replace '^.*'+$MVNW_REPO_PATTERN,'')"
}
$distributionUrlName = $distributionUrl -replace '^.*/',''
$distributionUrlNameMain = $distributionUrlName -replace '\.[^.]*$','' -replace '-bin$',''
$MAVEN_HOME_PARENT = "$HOME/.m2/wrapper/dists/$distributionUrlNameMain"
if ($env:MAVEN_USER_HOME) {
  $MAVEN_HOME_PARENT = "$env:MAVEN_USER_HOME/wrapper/dists/$distributionUrlNameMain"
}
$MAVEN_HOME_NAME = ([System.Security.Cryptography.MD5]::Create().ComputeHash([byte[]][char[]]$distributionUrl) | ForEach-Object {$_.ToString("x2")}) -join ''
$MAVEN_HOME = "$MAVEN_HOME_PARENT/$MAVEN_HOME_NAME"

if (Test-Path -Path "$MAVEN_HOME" -PathType Container) {
  Write-Verbose "found existing MAVEN_HOME at $MAVEN_HOME"
  Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"
  exit $?
}

if (! $distributionUrlNameMain -or ($distributionUrlName -eq $distributionUrlNameMain)) {
  Write-Error "distributionUrl is not valid, must end with *-bin.zip, but found $distributionUrl"
}

# prepare tmp dir
$TMP_DOWNLOAD_DIR_HOLDER = New-TemporaryFile
$TMP_DOWNLOAD_DIR = New-Item -Itemtype Directory -Path "$TMP_DOWNLOAD_DIR_HOLDER.dir"
$TMP_DOWNLOAD_DIR_HOLDER.Delete() | Out-Null
trap {
  if ($TMP_DOWNLOAD_DIR.Exists) {
    try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
    catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
  }
}

New-Item -Itemtype Directory -Path "$MAVEN_HOME_PARENT" -Force | Out-Null

# Download and Install Apache Maven
Write-Verbose "Couldn't find MAVEN_HOME, downloading and installing it ..."
Write-Verbose "Downloading from: $distributionUrl"
Write-Verbose "Downloading to: $TMP_DOWNLOAD_DIR/$distributionUrlName"

$webclient = New-Object System.Net.WebClient
if ($env:MVNW_USERNAME -and $env:MVNW_PASSWORD) {
  $webclient.Credentials = New-Object System.Net.NetworkCredential($env:MVNW_USERNAME, $env:MVNW_PASSWORD)
}
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$webclient.DownloadFile($distributionUrl, "$TMP_DOWNLOAD_DIR/$distributionUrlName") | Out-Null

# If specified, validate the SHA-256 sum of the Maven distribution zip file
$distributionSha256Sum = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionSha256Sum
if ($distributionSha256Sum) {
  if ($USE_MVND) {
    Write-Error "Checksum validation is not supported for maven-mvnd. `nPlease disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties."
  }
  Import-Module $PSHOME\Modules\Microsoft.PowerShell.Utility -Function Get-FileHash
  if ((Get-FileHash "$TMP_DOWNLOAD_DIR/$distributionUrlName" -Algorithm SHA256).Hash.ToLower() -ne $distributionSha256Sum) {
    Write-Error "Error: Failed to validate Maven distribution SHA-256, your Maven distribution might be compromised. If you updated your Maven version, you need to update the specified distributionSha256Sum property."
  }
}

# unzip and move
Expand-Archive "$TMP_DOWNLOAD_DIR/$distributionUrlName" -DestinationPath "$TMP_DOWNLOAD_DIR" | Out-Null
Rename-Item -Path "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain" -NewName $MAVEN_HOME_NAME | Out-Null
try {
  Move-Item -Path "$TMP_DOWNLOAD_DIR/$MAVEN_HOME_NAME" -Destination $MAVEN_HOME_PARENT | Out-Null
} catch {
  if (! (Test-Path -Path "$MAVEN_HOME" -PathType Container)) {
    Write-Error "fail to move MAVEN_HOME"
  }
} finally {
  try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
  catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
}

Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"

```

### 📄 mvnw

```
#!/bin/sh
# ----------------------------------------------------------------------------
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
# ----------------------------------------------------------------------------

# ----------------------------------------------------------------------------
# Apache Maven Wrapper startup batch script, version 3.3.2
#
# Optional ENV vars
# -----------------
#   JAVA_HOME - location of a JDK home dir, required when download maven via java source
#   MVNW_REPOURL - repo url base for downloading maven distribution
#   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
#   MVNW_VERBOSE - true: enable verbose log; debug: trace the mvnw script; others: silence the output
# ----------------------------------------------------------------------------

set -euf
[ "${MVNW_VERBOSE-}" != debug ] || set -x

# OS specific support.
native_path() { printf %s\\n "$1"; }
case "$(uname)" in
CYGWIN* | MINGW*)
  [ -z "${JAVA_HOME-}" ] || JAVA_HOME="$(cygpath --unix "$JAVA_HOME")"
  native_path() { cygpath --path --windows "$1"; }
  ;;
esac

# set JAVACMD and JAVACCMD
set_java_home() {
  # For Cygwin and MinGW, ensure paths are in Unix format before anything is touched
  if [ -n "${JAVA_HOME-}" ]; then
    if [ -x "$JAVA_HOME/jre/sh/java" ]; then
      # IBM's JDK on AIX uses strange locations for the executables
      JAVACMD="$JAVA_HOME/jre/sh/java"
      JAVACCMD="$JAVA_HOME/jre/sh/javac"
    else
      JAVACMD="$JAVA_HOME/bin/java"
      JAVACCMD="$JAVA_HOME/bin/javac"

      if [ ! -x "$JAVACMD" ] || [ ! -x "$JAVACCMD" ]; then
        echo "The JAVA_HOME environment variable is not defined correctly, so mvnw cannot run." >&2
        echo "JAVA_HOME is set to \"$JAVA_HOME\", but \"\$JAVA_HOME/bin/java\" or \"\$JAVA_HOME/bin/javac\" does not exist." >&2
        return 1
      fi
    fi
  else
    JAVACMD="$(
      'set' +e
      'unset' -f command 2>/dev/null
      'command' -v java
    )" || :
    JAVACCMD="$(
      'set' +e
      'unset' -f command 2>/dev/null
      'command' -v javac
    )" || :

    if [ ! -x "${JAVACMD-}" ] || [ ! -x "${JAVACCMD-}" ]; then
      echo "The java/javac command does not exist in PATH nor is JAVA_HOME set, so mvnw cannot run." >&2
      return 1
    fi
  fi
}

# hash string like Java String::hashCode
hash_string() {
  str="${1:-}" h=0
  while [ -n "$str" ]; do
    char="${str%"${str#?}"}"
    h=$(((h * 31 + $(LC_CTYPE=C printf %d "'$char")) % 4294967296))
    str="${str#?}"
  done
  printf %x\\n $h
}

verbose() { :; }
[ "${MVNW_VERBOSE-}" != true ] || verbose() { printf %s\\n "${1-}"; }

die() {
  printf %s\\n "$1" >&2
  exit 1
}

trim() {
  # MWRAPPER-139:
  #   Trims trailing and leading whitespace, carriage returns, tabs, and linefeeds.
  #   Needed for removing poorly interpreted newline sequences when running in more
  #   exotic environments such as mingw bash on Windows.
  printf "%s" "${1}" | tr -d '[:space:]'
}

# parse distributionUrl and optional distributionSha256Sum, requires .mvn/wrapper/maven-wrapper.properties
while IFS="=" read -r key value; do
  case "${key-}" in
  distributionUrl) distributionUrl=$(trim "${value-}") ;;
  distributionSha256Sum) distributionSha256Sum=$(trim "${value-}") ;;
  esac
done <"${0%/*}/.mvn/wrapper/maven-wrapper.properties"
[ -n "${distributionUrl-}" ] || die "cannot read distributionUrl property in ${0%/*}/.mvn/wrapper/maven-wrapper.properties"

case "${distributionUrl##*/}" in
maven-mvnd-*bin.*)
  MVN_CMD=mvnd.sh _MVNW_REPO_PATTERN=/maven/mvnd/
  case "${PROCESSOR_ARCHITECTURE-}${PROCESSOR_ARCHITEW6432-}:$(uname -a)" in
  *AMD64:CYGWIN* | *AMD64:MINGW*) distributionPlatform=windows-amd64 ;;
  :Darwin*x86_64) distributionPlatform=darwin-amd64 ;;
  :Darwin*arm64) distributionPlatform=darwin-aarch64 ;;
  :Linux*x86_64*) distributionPlatform=linux-amd64 ;;
  *)
    echo "Cannot detect native platform for mvnd on $(uname)-$(uname -m), use pure java version" >&2
    distributionPlatform=linux-amd64
    ;;
  esac
  distributionUrl="${distributionUrl%-bin.*}-$distributionPlatform.zip"
  ;;
maven-mvnd-*) MVN_CMD=mvnd.sh _MVNW_REPO_PATTERN=/maven/mvnd/ ;;
*) MVN_CMD="mvn${0##*/mvnw}" _MVNW_REPO_PATTERN=/org/apache/maven/ ;;
esac

# apply MVNW_REPOURL and calculate MAVEN_HOME
# maven home pattern: ~/.m2/wrapper/dists/{apache-maven-<version>,maven-mvnd-<version>-<platform>}/<hash>
[ -z "${MVNW_REPOURL-}" ] || distributionUrl="$MVNW_REPOURL$_MVNW_REPO_PATTERN${distributionUrl#*"$_MVNW_REPO_PATTERN"}"
distributionUrlName="${distributionUrl##*/}"
distributionUrlNameMain="${distributionUrlName%.*}"
distributionUrlNameMain="${distributionUrlNameMain%-bin}"
MAVEN_USER_HOME="${MAVEN_USER_HOME:-${HOME}/.m2}"
MAVEN_HOME="${MAVEN_USER_HOME}/wrapper/dists/${distributionUrlNameMain-}/$(hash_string "$distributionUrl")"

exec_maven() {
  unset MVNW_VERBOSE MVNW_USERNAME MVNW_PASSWORD MVNW_REPOURL || :
  exec "$MAVEN_HOME/bin/$MVN_CMD" "$@" || die "cannot exec $MAVEN_HOME/bin/$MVN_CMD"
}

if [ -d "$MAVEN_HOME" ]; then
  verbose "found existing MAVEN_HOME at $MAVEN_HOME"
  exec_maven "$@"
fi

case "${distributionUrl-}" in
*?-bin.zip | *?maven-mvnd-?*-?*.zip) ;;
*) die "distributionUrl is not valid, must match *-bin.zip or maven-mvnd-*.zip, but found '${distributionUrl-}'" ;;
esac

# prepare tmp dir
if TMP_DOWNLOAD_DIR="$(mktemp -d)" && [ -d "$TMP_DOWNLOAD_DIR" ]; then
  clean() { rm -rf -- "$TMP_DOWNLOAD_DIR"; }
  trap clean HUP INT TERM EXIT
else
  die "cannot create temp dir"
fi

mkdir -p -- "${MAVEN_HOME%/*}"

# Download and Install Apache Maven
verbose "Couldn't find MAVEN_HOME, downloading and installing it ..."
verbose "Downloading from: $distributionUrl"
verbose "Downloading to: $TMP_DOWNLOAD_DIR/$distributionUrlName"

# select .zip or .tar.gz
if ! command -v unzip >/dev/null; then
  distributionUrl="${distributionUrl%.zip}.tar.gz"
  distributionUrlName="${distributionUrl##*/}"
fi

# verbose opt
__MVNW_QUIET_WGET=--quiet __MVNW_QUIET_CURL=--silent __MVNW_QUIET_UNZIP=-q __MVNW_QUIET_TAR=''
[ "${MVNW_VERBOSE-}" != true ] || __MVNW_QUIET_WGET='' __MVNW_QUIET_CURL='' __MVNW_QUIET_UNZIP='' __MVNW_QUIET_TAR=v

# normalize http auth
case "${MVNW_PASSWORD:+has-password}" in
'') MVNW_USERNAME='' MVNW_PASSWORD='' ;;
has-password) [ -n "${MVNW_USERNAME-}" ] || MVNW_USERNAME='' MVNW_PASSWORD='' ;;
esac

if [ -z "${MVNW_USERNAME-}" ] && command -v wget >/dev/null; then
  verbose "Found wget ... using wget"
  wget ${__MVNW_QUIET_WGET:+"$__MVNW_QUIET_WGET"} "$distributionUrl" -O "$TMP_DOWNLOAD_DIR/$distributionUrlName" || die "wget: Failed to fetch $distributionUrl"
elif [ -z "${MVNW_USERNAME-}" ] && command -v curl >/dev/null; then
  verbose "Found curl ... using curl"
  curl ${__MVNW_QUIET_CURL:+"$__MVNW_QUIET_CURL"} -f -L -o "$TMP_DOWNLOAD_DIR/$distributionUrlName" "$distributionUrl" || die "curl: Failed to fetch $distributionUrl"
elif set_java_home; then
  verbose "Falling back to use Java to download"
  javaSource="$TMP_DOWNLOAD_DIR/Downloader.java"
  targetZip="$TMP_DOWNLOAD_DIR/$distributionUrlName"
  cat >"$javaSource" <<-END
	public class Downloader extends java.net.Authenticator
	{
	  protected java.net.PasswordAuthentication getPasswordAuthentication()
	  {
	    return new java.net.PasswordAuthentication( System.getenv( "MVNW_USERNAME" ), System.getenv( "MVNW_PASSWORD" ).toCharArray() );
	  }
	  public static void main( String[] args ) throws Exception
	  {
	    setDefault( new Downloader() );
	    java.nio.file.Files.copy( java.net.URI.create( args[0] ).toURL().openStream(), java.nio.file.Paths.get( args[1] ).toAbsolutePath().normalize() );
	  }
	}
	END
  # For Cygwin/MinGW, switch paths to Windows format before running javac and java
  verbose " - Compiling Downloader.java ..."
  "$(native_path "$JAVACCMD")" "$(native_path "$javaSource")" || die "Failed to compile Downloader.java"
  verbose " - Running Downloader.java ..."
  "$(native_path "$JAVACMD")" -cp "$(native_path "$TMP_DOWNLOAD_DIR")" Downloader "$distributionUrl" "$(native_path "$targetZip")"
fi

# If specified, validate the SHA-256 sum of the Maven distribution zip file
if [ -n "${distributionSha256Sum-}" ]; then
  distributionSha256Result=false
  if [ "$MVN_CMD" = mvnd.sh ]; then
    echo "Checksum validation is not supported for maven-mvnd." >&2
    echo "Please disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties." >&2
    exit 1
  elif command -v sha256sum >/dev/null; then
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | sha256sum -c >/dev/null 2>&1; then
      distributionSha256Result=true
    fi
  elif command -v shasum >/dev/null; then
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | shasum -a 256 -c >/dev/null 2>&1; then
      distributionSha256Result=true
    fi
  else
    echo "Checksum validation was requested but neither 'sha256sum' or 'shasum' are available." >&2
    echo "Please install either command, or disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties." >&2
    exit 1
  fi
  if [ $distributionSha256Result = false ]; then
    echo "Error: Failed to validate Maven distribution SHA-256, your Maven distribution might be compromised." >&2
    echo "If you updated your Maven version, you need to update the specified distributionSha256Sum property." >&2
    exit 1
  fi
fi

# unzip and move
if command -v unzip >/dev/null; then
  unzip ${__MVNW_QUIET_UNZIP:+"$__MVNW_QUIET_UNZIP"} "$TMP_DOWNLOAD_DIR/$distributionUrlName" -d "$TMP_DOWNLOAD_DIR" || die "failed to unzip"
else
  tar xzf${__MVNW_QUIET_TAR:+"$__MVNW_QUIET_TAR"} "$TMP_DOWNLOAD_DIR/$distributionUrlName" -C "$TMP_DOWNLOAD_DIR" || die "failed to untar"
fi
printf %s\\n "$distributionUrl" >"$TMP_DOWNLOAD_DIR/$distributionUrlNameMain/mvnw.url"
mv -- "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain" "$MAVEN_HOME" || [ -d "$MAVEN_HOME" ] || die "fail to move MAVEN_HOME"

clean || :
exec_maven "$@"

```

### 📄 Dockerfile

```
FROM eclipse-temurin:21-jdk-jammy as builder
WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]

```

### 📄 pom.xml

```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.4</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <groupId>com.tamthong</groupId>
    <artifactId>finance-tracker-api</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>finance-tracker-api</name>
    <description>Personal Finance tracker web application</description>

    <properties>
        <java.version>21</java.version>
        <jjwt.version>0.11.5</jjwt.version>
        <org.mapstruct.version>1.5.5.Final</org.mapstruct.version>
        <org.projectlombok.version>1.18.30</org.projectlombok.version>
        <lombok-mapstruct-binding.version>0.2.0</lombok-mapstruct-binding.version>
        <junit.version>5.8.2</junit.version>
        <testng.version>7.7.0</testng.version>
    </properties>

    <dependencies>
        <!-- Spring Boot Starters -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <!-- Database -->
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>

        <!-- JWT -->
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-api</artifactId>
            <version>${jjwt.version}</version>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-impl</artifactId>
            <version>${jjwt.version}</version>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-jackson</artifactId>
            <version>${jjwt.version}</version>
        </dependency>

        <!-- dotenv -->
        <dependency>
            <groupId>io.github.cdimascio</groupId>
            <artifactId>java-dotenv</artifactId>
            <version>5.2.2</version>
        </dependency>

        <!-- Lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>${org.projectlombok.version}</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok-mapstruct-binding</artifactId>
            <version>${lombok-mapstruct-binding.version}</version>
        </dependency>

        <!-- MapStruct -->
        <dependency>
            <groupId>org.mapstruct</groupId>
            <artifactId>mapstruct</artifactId>
            <version>${org.mapstruct.version}</version>
        </dependency>

        <!-- Validation -->
        <dependency>
            <groupId>javax.validation</groupId>
            <artifactId>validation-api</artifactId>
            <version>2.0.1.Final</version>
        </dependency>

        <!-- Testing -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>${junit.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId>
            <version>${junit.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.testng</groupId>
            <artifactId>testng</artifactId>
            <version>${testng.version}</version>
            <scope>test</scope>
        </dependency>

        <!-- Selenium -->
        <dependency>
            <groupId>org.seleniumhq.selenium</groupId>
            <artifactId>selenium-java</artifactId>
            <version>4.16.1</version>
        </dependency>
        <dependency>
            <groupId>io.github.bonigarcia</groupId>
            <artifactId>webdrivermanager</artifactId>
            <version>5.6.2</version>
        </dependency>

        <!-- DevTools -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <configuration>
                    <argLine>-Dspring.profiles.active=test</argLine>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                    <annotationProcessorPaths>
                        <path>
                            <groupId>org.mapstruct</groupId>
                            <artifactId>mapstruct-processor</artifactId>
                            <version>${org.mapstruct.version}</version>
                        </path>
                        <path>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                            <version>${org.projectlombok.version}</version>
                        </path>
                    </annotationProcessorPaths>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>

```

### 📄 compose.yml

```
services:
  postgres:
    container_name: postgres_container_finance
    image: postgres:latest
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      PGDATA: /data/postgres
    volumes:
      - postgres_finance:/data/postgres
    ports:
      - "5432:5432"
    restart: unless-stopped

volumes:
  postgres_finance:

```

### 📄 src/test/java/com/tamthong/finance_tracker_api/service/BudgetServiceTest.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.BudgetDTO;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.mapper.BudgetMapper;
import com.tamthong.finance_tracker_api.model.Budget;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.repository.BudgetRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class BudgetServiceTest {

    @Mock
    private BudgetRepository budgetRepository;

    @Mock
    private BudgetMapper budgetMapper;

    @Mock
    private UserService userService;

    @InjectMocks
    private BudgetService budgetService;

    private Budget budget;
    private BudgetDTO budgetDTO;
    private User user;

    @BeforeEach
    void setUp() {
        user = new User();
        user.setId(1L);

        budget = new Budget();
        budget.setId(1L);
        budget.setUser(user);
        budget.setSpent(BigDecimal.ZERO);

        budgetDTO = new BudgetDTO();
        budgetDTO.setId(1L);
    }

    @Test
    void testGetAllBudgetsByUser() {
        when(userService.getCurrentUserId()).thenReturn(1L);
        when(budgetRepository.findByUserIdOrderByCreatedAtDesc(1L)).thenReturn(Collections.singletonList(budget));
        when(budgetMapper.toDTO(any(Budget.class))).thenReturn(budgetDTO);

        List<BudgetDTO> result = budgetService.getAllBudgetsByUser();

        assertNotNull(result);
        assertEquals(1, result.size());
        verify(budgetRepository, times(1)).findByUserIdOrderByCreatedAtDesc(1L);
    }

    @Test
    void testCreateBudget() {
        when(budgetMapper.toEntity(any(BudgetDTO.class))).thenReturn(budget);
        when(userService.getCurrentUser()).thenReturn(user);
        when(budgetRepository.save(any(Budget.class))).thenReturn(budget);
        when(budgetMapper.toDTO(any(Budget.class))).thenReturn(budgetDTO);

        BudgetDTO result = budgetService.createBudget(budgetDTO);

        assertNotNull(result);
        assertEquals(budgetDTO.getId(), result.getId());
        verify(budgetRepository, times(1)).save(any(Budget.class));
    }

    @Test
    void testGetBudgetById_NotFound() {
        when(budgetRepository.findById(anyLong())).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> budgetService.updateBudget(1L, budgetDTO));
    }
}

```

### 📄 src/test/java/com/tamthong/finance_tracker_api/service/UserSettingsServiceTest.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.UserSettingsDTO;
import com.tamthong.finance_tracker_api.dto.request.UserSettingsRequests.*;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.model.UserSettings;
import com.tamthong.finance_tracker_api.repository.UserSettingsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserSettingsServiceTest {

    @Mock
    private UserSettingsRepository settingsRepository;

    @Mock
    private UserService userService;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserSettingsService userSettingsService;

    private User user;
    private UserSettings userSettings;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        user = new User();
        user.setId(1L);
        user.setUsername("testUser");
        user.setPassword("password");

        userSettings = new UserSettings();
        userSettings.setId(1L);
        userSettings.setUser(user);
        userSettings.setName("testUser");
    }

    @Test
    void testGetCurrentUserSettings() {
        when(userService.getCurrentUser()).thenReturn(user);
        when(settingsRepository.findByUserId(user.getId())).thenReturn(Optional.of(userSettings));

        UserSettingsDTO result = userSettingsService.getCurrentUserSettings();

        assertNotNull(result);
        assertEquals(userSettings.getName(), result.getName());
        verify(settingsRepository, times(1)).findByUserId(user.getId());
    }

    @Test
    void testUpdateProfile() {
        UpdateProfileRequest request = new UpdateProfileRequest();
        request.setName("newName");
        request.setPhone("123456789");
        request.setAddress("newAddress");

        when(userService.getCurrentUser()).thenReturn(user);
        when(settingsRepository.findByUserId(user.getId())).thenReturn(Optional.of(userSettings));
        when(settingsRepository.save(any(UserSettings.class))).thenReturn(userSettings);

        UserSettingsDTO result = userSettingsService.updateProfile(request);

        assertNotNull(result);
        assertEquals(request.getName(), result.getName());
        verify(userService, times(1)).save(user);
        verify(settingsRepository, times(1)).save(userSettings);
    }

    @Test
    void testUpdatePassword() {
        UpdatePasswordRequest request = new UpdatePasswordRequest();
        request.setCurrentPassword("password");
        request.setNewPassword("newPassword");

        when(userService.getCurrentUser()).thenReturn(user);
        when(passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())).thenReturn(true);

        userSettingsService.updatePassword(request);

        verify(passwordEncoder, times(1)).encode(request.getNewPassword());
        verify(userService, times(1)).save(user);
    }

    @Test
    void testUpdatePasswordWithIncorrectCurrentPassword() {
        UpdatePasswordRequest request = new UpdatePasswordRequest();
        request.setCurrentPassword("wrongPassword");
        request.setNewPassword("newPassword");

        when(userService.getCurrentUser()).thenReturn(user);
        when(passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())).thenReturn(false);

        assertThrows(BadCredentialsException.class, () -> userSettingsService.updatePassword(request));
    }

    @Test
    void testUpdateNotificationSettings() {
        NotificationSettingsRequest request = new NotificationSettingsRequest();
        request.setEmailNotifications(true);
        request.setBudgetAlerts(true);
        request.setTransactionNotifications(true);

        when(userService.getCurrentUser()).thenReturn(user);
        when(settingsRepository.findByUserId(user.getId())).thenReturn(Optional.of(userSettings));
        when(settingsRepository.save(any(UserSettings.class))).thenReturn(userSettings);

        UserSettingsDTO result = userSettingsService.updateNotificationSettings(request);

        assertNotNull(result);
        assertEquals(request.getEmailNotifications(), result.getEmailNotifications());
        verify(settingsRepository, times(1)).save(userSettings);
    }

    @Test
    void testUpdatePreferences() {
        PreferencesRequest request = new PreferencesRequest();
        request.setCurrency("USD");
        request.setFiscalMonthStartDay(1);
        request.setDateFormat("MM/DD/YYYY");
        request.setDarkMode(true);

        when(userService.getCurrentUser()).thenReturn(user);
        when(settingsRepository.findByUserId(user.getId())).thenReturn(Optional.of(userSettings));
        when(settingsRepository.save(any(UserSettings.class))).thenReturn(userSettings);

        UserSettingsDTO result = userSettingsService.updatePreferences(request);

        assertNotNull(result);
        assertEquals(request.getCurrency(), result.getCurrency());
        verify(settingsRepository, times(1)).save(userSettings);
    }
}

```

### 📄 src/test/java/com/tamthong/finance_tracker_api/service/UserServiceTest.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.request.AuthResponse;
import com.tamthong.finance_tracker_api.dto.request.LoginRequest;
import com.tamthong.finance_tracker_api.dto.request.RegisterRequest;
import com.tamthong.finance_tracker_api.exception.UserAlreadyExistsException;
import com.tamthong.finance_tracker_api.mapper.UserMapper;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.dto.UserDTO;
import com.tamthong.finance_tracker_api.repository.UserRepository;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.security.JwtService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtService jwtService;

    @Mock
    private UserMapper userMapper;

    @InjectMocks
    private UserService userService;

    @Mock
    private SecurityContext securityContext;

    @Mock
    private Authentication authentication;

    @BeforeEach
    public void setUp() {
        SecurityContextHolder.setContext(securityContext);
    }

    @Test
    public void testGetCurrentUserId() {
        String email = "test@example.com";
        User user = new User();
        user.setId(1L);
        user.setEmail(email);

        when(securityContext.getAuthentication()).thenReturn(authentication);
        when(authentication.getName()).thenReturn(email);
        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));

        Long userId = userService.getCurrentUserId();

        assertEquals(1L, userId);
    }

    @Test
    public void testGetCurrentUser() {
        String email = "test@example.com";
        User user = new User();
        user.setEmail(email);

        when(securityContext.getAuthentication()).thenReturn(authentication);
        when(authentication.getName()).thenReturn(email);
        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));

        User currentUser = userService.getCurrentUser();

        assertEquals(user, currentUser);
    }

    @Test
    public void testRegister() {
        RegisterRequest request = new RegisterRequest();
        request.setUsername("testuser");
        request.setEmail("test@example.com");
        request.setPassword("password");

        User user = new User();
        user.setUsername("testuser");
        user.setEmail("test@example.com");
        user.setPassword("encodedPassword");

        when(userRepository.existsByEmail(request.getEmail())).thenReturn(false);
        when(passwordEncoder.encode(request.getPassword())).thenReturn("encodedPassword");
        when(userRepository.save(any(User.class))).thenReturn(user);
        when(jwtService.generateToken(user.getEmail())).thenReturn("token");
        when(userMapper.toDTO(any(User.class))).thenReturn(new UserDTO());

        AuthResponse response = userService.register(request);

        assertNotNull(response);
        assertEquals("token", response.getToken());
    }

    @Test
    public void testAuthenticateUser() {
        LoginRequest request = new LoginRequest();
        request.setEmail("test@example.com");
        request.setPassword("password");

        User user = new User();
        user.setEmail("test@example.com");
        user.setPassword("encodedPassword");

        when(userRepository.findByEmail(request.getEmail())).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(request.getPassword(), user.getPassword())).thenReturn(true);
        when(jwtService.generateToken(user.getEmail())).thenReturn("token");
        when(userMapper.toDTO(any(User.class))).thenReturn(new UserDTO());

        AuthResponse response = userService.authenticateUser(request);

        assertNotNull(response);
        assertEquals("token", response.getToken());
    }

    @Test
    public void testSave() {
        User user = new User();
        when(userRepository.save(user)).thenReturn(user);

        User savedUser = userService.save(user);

        assertEquals(user, savedUser);
    }

    @Test
    public void testUpdateProfile() {
        User user = new User();
        user.setEmail("old@example.com");

        when(userRepository.existsByEmail("new@example.com")).thenReturn(false);
        when(userRepository.save(user)).thenReturn(user);

        User updatedUser = userService.updateProfile(user, "newUsername", "new@example.com");

        assertEquals("new@example.com", updatedUser.getEmail());
    }

    @Test
    public void testUpdatePassword() {
        User user = new User();
        user.setPassword("oldPassword");

        when(passwordEncoder.encode("newPassword")).thenReturn("encodedNewPassword");
        when(userRepository.save(user)).thenReturn(user);

        User updatedUser = userService.updatePassword(user, "newPassword");

        assertEquals("encodedNewPassword", updatedUser.getPassword());
    }

    @Test
    public void testDeleteUser() {
        User user = new User();
        user.setId(1L);

        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        doNothing().when(userRepository).delete(user);

        userService.deleteUser(1L);

        verify(userRepository, times(1)).delete(user);
    }
}

```

### 📄 src/test/java/com/tamthong/finance_tracker_api/service/TransactionServiceTest.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.TransactionDTO;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.mapper.TransactionMapper;
import com.tamthong.finance_tracker_api.model.Transaction;
import com.tamthong.finance_tracker_api.model.TransactionStatus;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.repository.TransactionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
public class TransactionServiceTest {

    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private TransactionMapper transactionMapper;

    @Mock
    private UserService userService;

    @InjectMocks
    private TransactionService transactionService;

    private User user;
    private Transaction transaction;
    private TransactionDTO transactionDTO;

    @BeforeEach
    void setUp() {
        user = new User();
        user.setId(1L);

        transaction = new Transaction();
        transaction.setId(1L);
        transaction.setUser(user);
        transaction.setDate(LocalDate.now());
        transaction.setStatus(TransactionStatus.COMPLETED);

        transactionDTO = new TransactionDTO();
        transactionDTO.setId(1L);
    }

    @Test
    void testGetAllTransactionsByUser() {
        when(userService.getCurrentUserId()).thenReturn(1L);
        when(transactionRepository.findByUserIdOrderByDateDesc(1L)).thenReturn(Collections.singletonList(transaction));
        when(transactionMapper.toDTO(transaction)).thenReturn(transactionDTO);

        List<TransactionDTO> result = transactionService.getAllTransactionsByUser();

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(transactionDTO, result.get(0));
    }

    @Test
    void testGetTransaction() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));
        when(transactionMapper.toDTO(transaction)).thenReturn(transactionDTO);
        when(userService.getCurrentUserId()).thenReturn(1L);

        TransactionDTO result = transactionService.getTransaction(1L);

        assertNotNull(result);
        assertEquals(transactionDTO, result);
    }

    @Test
    void testCreateTransaction() {
        when(userService.getCurrentUser()).thenReturn(user);
        when(transactionMapper.toEntity(transactionDTO)).thenReturn(transaction);
        when(transactionRepository.save(transaction)).thenReturn(transaction);
        when(transactionMapper.toDTO(transaction)).thenReturn(transactionDTO);

        TransactionDTO result = transactionService.createTransaction(transactionDTO);

        assertNotNull(result);
        assertEquals(transactionDTO, result);
    }

    @Test
    void testUpdateTransaction() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));
        when(transactionMapper.toEntity(transactionDTO)).thenReturn(transaction);
        when(transactionRepository.save(transaction)).thenReturn(transaction);
        when(transactionMapper.toDTO(transaction)).thenReturn(transactionDTO);
        when(userService.getCurrentUserId()).thenReturn(1L);

        TransactionDTO result = transactionService.updateTransaction(1L, transactionDTO);

        assertNotNull(result);
        assertEquals(transactionDTO, result);
    }

    @Test
    void testDeleteTransaction() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));
        when(userService.getCurrentUserId()).thenReturn(1L);

        transactionService.deleteTransaction(1L);

        verify(transactionRepository, times(1)).delete(transaction);
    }

    @Test
    void testGetTransactionById_NotFound() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.empty());
        when(userService.getCurrentUserId()).thenReturn(1L);

        assertThrows(ResourceNotFoundException.class, () -> transactionService.getTransaction(1L));
    }

    @Test
    void testGetTransactionById_UserMismatch() {
        User anotherUser = new User();
        anotherUser.setId(2L);
        transaction.setUser(anotherUser);

        when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));
        when(userService.getCurrentUserId()).thenReturn(1L);

        assertThrows(ResourceNotFoundException.class, () -> transactionService.getTransaction(1L));
    }
}

```

### 📄 src/main/resources/application.properties

```
spring.application.name=finance-tracker-api

spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=postgres
spring.datasource.password=Password@postgres

spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update

jwt.secret=your_jwt_secret_key_should_be_very_long_and_secure
jwt.expiration=86400000

logging.level.org.springframework.security=DEBUG
logging.level.org.springframework.web=DEBUG

# Show SQL
spring.jpa.properties.hibernate.format_sql=true

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/FinanceTrackerApiApplication.java

```
package com.tamthong.finance_tracker_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FinanceTrackerApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinanceTrackerApiApplication.class, args);
	}

}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/mapper/SavingsGoalMapper.java

```
package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.SavingsGoalDTO;
import com.tamthong.finance_tracker_api.model.SavingsGoal;
import com.tamthong.finance_tracker_api.model.User;
import org.mapstruct.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface SavingsGoalMapper {
    @Mapping(target = "userId", source = "user.id")
    SavingsGoalDTO toDTO(SavingsGoal goal);

    @Mapping(target = "user", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "id", ignore = true)
    SavingsGoal toEntity(SavingsGoalDTO dto);

    @AfterMapping
    default void mapUserReference(@MappingTarget SavingsGoal.SavingsGoalBuilder goal, SavingsGoalDTO dto) {
        if (dto.getUserId() != null) {
            User user = new User();
            user.setId(dto.getUserId());
            goal.user(user);
        }
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/mapper/UserMapper.java

```
package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.UserDTO;
import com.tamthong.finance_tracker_api.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO toDTO(User user);

    User toEntity(UserDTO dto);
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/mapper/TransactionMapper.java

```
package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.TransactionDTO;
import com.tamthong.finance_tracker_api.model.Transaction;
import com.tamthong.finance_tracker_api.model.User;
import org.mapstruct.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TransactionMapper {
    @Mapping(target = "userId", source = "user.id")
    TransactionDTO toDTO(Transaction transaction);

    @Mapping(target = "user", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "id", ignore = true)
    Transaction toEntity(TransactionDTO dto);

    @AfterMapping
    default void mapUserReference(@MappingTarget Transaction.TransactionBuilder transaction, TransactionDTO dto) {
        if (dto.getUserId() != null) {
            User user = new User();
            user.setId(dto.getUserId());
            transaction.user(user);
        }
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/mapper/BudgetMapper.java

```
package com.tamthong.finance_tracker_api.mapper;

import com.tamthong.finance_tracker_api.dto.BudgetDTO;
import com.tamthong.finance_tracker_api.model.Budget;
import com.tamthong.finance_tracker_api.model.User;
import org.mapstruct.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BudgetMapper {
    @Mapping(target = "userId", source = "user.id")
    @Mapping(target = "lastUpdated", source = "updatedAt")
    BudgetDTO toDTO(Budget budget);

    @Mapping(target = "user.id", source = "userId")
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "id", ignore = true)
    Budget toEntity(BudgetDTO budgetDTO);

    @AfterMapping
    default void mapUserReference(@MappingTarget Budget.BudgetBuilder budget, BudgetDTO dto) {
        if (dto.getUserId() != null) {
            User user = new User();
            user.setId(dto.getUserId());
            budget.user(user);
        }
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/controller/TransactionController.java

```
package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.TransactionDTO;
import com.tamthong.finance_tracker_api.service.TransactionService;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class TransactionController {
    private final TransactionService transactionService;

    @GetMapping
    public ResponseEntity<Page<TransactionDTO>> getAllTransactions(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "desc") String direction) {
        Sort sort = Sort.by(Sort.Direction.fromString(direction), sortBy);
        Pageable pageable = PageRequest.of(page, size, sort);
        return ResponseEntity.ok(transactionService.getAllTransactionsByUser(pageable));
    }

    @PostMapping("/bulk")
    public ResponseEntity<List<TransactionDTO>> importTransactions(
            @RequestBody List<TransactionDTO> transactions) {
        return ResponseEntity.ok(transactionService.createBulkTransactions(transactions));
    }

    @PostMapping
    public ResponseEntity<TransactionDTO> createTransaction(@RequestBody TransactionDTO transactionDTO) {
        return ResponseEntity.ok(transactionService.createTransaction(transactionDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransactionDTO> getTransaction(@PathVariable Long id) {
        return ResponseEntity.ok(transactionService.getTransaction(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TransactionDTO> updateTransaction(
            @PathVariable Long id,
            @RequestBody TransactionDTO transactionDTO) {
        return ResponseEntity.ok(transactionService.updateTransaction(id, transactionDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
        transactionService.deleteTransaction(id);
        return ResponseEntity.ok().build();
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/controller/DashboardController.java

```
package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.dashboard.*;
import com.tamthong.finance_tracker_api.service.DashboardService;
import lombok.RequiredArgsConstructor;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {
    private final DashboardService dashboardService;

    @GetMapping("/overview")
    public ResponseEntity<DashboardOverviewDTO> getOverview(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {
        return ResponseEntity.ok(dashboardService.getOverview(startDate, endDate));
    }

    @GetMapping("/trends")
    public ResponseEntity<List<SpendingTrendDTO>> getSpendingTrends(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {
        return ResponseEntity.ok(dashboardService.getSpendingTrends(startDate, endDate));
    }

    @GetMapping("/expenses-by-category")
    public ResponseEntity<List<ExpenseByCategoryDTO>> getExpensesByCategory(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {
        return ResponseEntity.ok(dashboardService.getExpensesByCategory(startDate, endDate));
    }

    @GetMapping("/alerts")
    public ResponseEntity<List<AlertDTO>> getAlerts(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {
        return ResponseEntity.ok(dashboardService.getAlerts(startDate, endDate));
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/controller/CategoryController.java

```
package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.CategoryDTO;
import com.tamthong.finance_tracker_api.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> getAllCategories() {
        return ResponseEntity.ok(categoryService.getAllCategories());
    }

    @PostMapping
    public ResponseEntity<CategoryDTO> createCategory(@RequestBody CategoryDTO categoryDTO) {
        return ResponseEntity.ok(categoryService.createCategory(categoryDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoryDTO> updateCategory(
            @PathVariable String id,
            @RequestBody CategoryDTO categoryDTO) {
        return ResponseEntity.ok(categoryService.updateCategory(id, categoryDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable String id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok().build();
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/controller/DemoDataController.java

```
package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.config.DataSeeder;
import com.tamthong.finance_tracker_api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/demo")
@RequiredArgsConstructor
public class DemoDataController {
    private final DataSeeder dataSeeder;
    private final UserService userService;

    @PostMapping("/seed")
    public ResponseEntity<String> seedData() {
        try {
            Long currentUserId = userService.getCurrentUserId();
            dataSeeder.seedDataForUser(currentUserId);
            return ResponseEntity.ok("Demo data generated successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error generating demo data: " + e.getMessage());
        }
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/controller/BudgetController.java

```
package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.BudgetDTO;
import com.tamthong.finance_tracker_api.service.BudgetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/budgets")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class BudgetController {
    private final BudgetService budgetService;

    @GetMapping
    public ResponseEntity<List<BudgetDTO>> getAllBudgets() {
        return ResponseEntity.ok(budgetService.getAllBudgetsByUser());
    }

    @PostMapping
    public ResponseEntity<BudgetDTO> createBudget(@RequestBody BudgetDTO budgetDTO) {
        return ResponseEntity.ok(budgetService.createBudget(budgetDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BudgetDTO> updateBudget(
            @PathVariable Long id,
            @RequestBody BudgetDTO budgetDTO) {
        return ResponseEntity.ok(budgetService.updateBudget(id, budgetDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBudget(@PathVariable Long id) {
        budgetService.deleteBudget(id);
        return ResponseEntity.ok().build();
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/controller/AuthController.java

```
package com.tamthong.finance_tracker_api.controller;


import com.tamthong.finance_tracker_api.dto.request.AuthResponse;
import com.tamthong.finance_tracker_api.dto.request.LoginRequest;
import com.tamthong.finance_tracker_api.dto.request.RegisterRequest;
import com.tamthong.finance_tracker_api.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/controller/TestController.java

```
package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/test")
@RequiredArgsConstructor
public class TestController {
    private final UserService userService;

    @GetMapping("/public")
    public ResponseEntity<Map<String, String>> publicEndpoint() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Public endpoint is working!");
        response.put("status", "success");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/authenticated")
    public ResponseEntity<Map<String, Object>> authenticatedEndpoint(Authentication authentication) {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Authenticated endpoint is working!");
        response.put("status", "success");
        response.put("userEmail", authentication.getName());
        response.put("userId", userService.getCurrentUserId());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/token-debug")
    public ResponseEntity<Map<String, String>> debugToken(
            @RequestHeader(value = "Authorization", required = false) String authHeader) {
        Map<String, String> response = new HashMap<>();

        if (authHeader == null) {
            response.put("status", "error");
            response.put("message", "No Authorization header");
            return ResponseEntity.ok(response);
        }

        response.put("status", "success");
        response.put("authHeader", authHeader);
        response.put("tokenPresent", String.valueOf(authHeader.startsWith("Bearer ")));
        if (authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            response.put("tokenLength", String.valueOf(token.length()));
            response.put("tokenPreview", token.substring(0, Math.min(token.length(), 20)) + "...");
        }

        return ResponseEntity.ok(response);
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/controller/UserSettingsController.java

```
package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.UserSettingsDTO;
import com.tamthong.finance_tracker_api.dto.request.UserSettingsRequests.*;
import com.tamthong.finance_tracker_api.service.UserSettingsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/settings")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class UserSettingsController {
    private final UserSettingsService settingsService;

    @GetMapping
    public ResponseEntity<UserSettingsDTO> getCurrentSettings() {
        UserSettingsDTO settings = settingsService.getCurrentUserSettings();
        return ResponseEntity.ok(settings);
    }

    @PutMapping("/profile")
    public ResponseEntity<UserSettingsDTO> updateProfile(@RequestBody UpdateProfileRequest request) {
        UserSettingsDTO updatedSettings = settingsService.updateProfile(request);
        return ResponseEntity.ok(updatedSettings);
    }

    @PutMapping("/password")
    public ResponseEntity<Void> updatePassword(@RequestBody UpdatePasswordRequest request) {
        settingsService.updatePassword(request);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/notifications")
    public ResponseEntity<UserSettingsDTO> updateNotifications(@RequestBody NotificationSettingsRequest request) {
        UserSettingsDTO updatedSettings = settingsService.updateNotificationSettings(request);
        return ResponseEntity.ok(updatedSettings);
    }

    @PutMapping("/preferences")
    public ResponseEntity<UserSettingsDTO> updatePreferences(@RequestBody PreferencesRequest request) {
        UserSettingsDTO updatedSettings = settingsService.updatePreferences(request);
        return ResponseEntity.ok(updatedSettings);
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/controller/SavingsGoalController.java

```
package com.tamthong.finance_tracker_api.controller;

import com.tamthong.finance_tracker_api.dto.SavingsGoalDTO;
import com.tamthong.finance_tracker_api.service.SavingsGoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/goals")
@RequiredArgsConstructor
public class SavingsGoalController {
    private final SavingsGoalService savingsGoalService;

    @GetMapping
    public ResponseEntity<List<SavingsGoalDTO>> getAllGoals() {
        return ResponseEntity.ok(savingsGoalService.getAllGoalsByUser());
    }

    @PostMapping
    public ResponseEntity<SavingsGoalDTO> createGoal(@RequestBody SavingsGoalDTO goalDTO) {
        return ResponseEntity.ok(savingsGoalService.createGoal(goalDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SavingsGoalDTO> updateGoal(
            @PathVariable Long id,
            @RequestBody SavingsGoalDTO goalDTO) {
        return ResponseEntity.ok(savingsGoalService.updateGoal(id, goalDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGoal(@PathVariable Long id) {
        savingsGoalService.deleteGoal(id);
        return ResponseEntity.ok().build();
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/service/AuthService.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.request.AuthResponse;
import com.tamthong.finance_tracker_api.dto.request.LoginRequest;
import com.tamthong.finance_tracker_api.dto.request.RegisterRequest;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserService userService;

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        return userService.register(request);
    }

    @Transactional
    public AuthResponse login(LoginRequest request) {
        try {
            return userService.authenticateUser(request);
        } catch (Exception e) {
            throw new RuntimeException("Invalid email/password combination");
        }
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/service/BudgetService.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.BudgetDTO;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.mapper.BudgetMapper;
import com.tamthong.finance_tracker_api.model.Budget;
import com.tamthong.finance_tracker_api.repository.BudgetRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BudgetService {
    private final BudgetRepository budgetRepository;
    private final BudgetMapper budgetMapper;
    private final UserService userService;
    private final Logger logger = LoggerFactory.getLogger(BudgetService.class);

    @Transactional(readOnly = true)
    public List<BudgetDTO> getAllBudgetsByUser() {
        try {
            Long userId = userService.getCurrentUserId();
            return budgetRepository.findByUserIdOrderByCreatedAtDesc(userId)
                    .stream()
                    .map(budgetMapper::toDTO)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            logger.error("Error fetching budgets for user", e);
            throw new RuntimeException("Error fetching budgets", e);
        }
    }

    @Transactional
    public BudgetDTO createBudget(BudgetDTO budgetDTO) {
        try {
            Budget budget = budgetMapper.toEntity(budgetDTO);
            budget.setUser(userService.getCurrentUser());
            budget.setSpent(BigDecimal.ZERO);
            Budget savedBudget = budgetRepository.save(budget);
            return budgetMapper.toDTO(savedBudget);
        } catch (Exception e) {
            logger.error("Error creating budget", e);
            throw new RuntimeException("Error creating budget", e);
        }
    }

    @Transactional
    public BudgetDTO updateBudget(Long id, BudgetDTO budgetDTO) {
        try {
            Budget existingBudget = getBudgetById(id);
            Budget updatedBudget = budgetMapper.toEntity(budgetDTO);
            updatedBudget.setId(id);
            updatedBudget.setUser(existingBudget.getUser());
            updatedBudget.setSpent(existingBudget.getSpent());
            Budget savedBudget = budgetRepository.save(updatedBudget);
            return budgetMapper.toDTO(savedBudget);
        } catch (ResourceNotFoundException e) {
            throw new ResourceNotFoundException("Budget not found");
        } catch (Exception e) {
            logger.error("Error updating budget", e);
            throw new RuntimeException("Error updating budget", e);
        }
    }

    @Transactional
    public void deleteBudget(Long id) {
        try {
            Budget budget = getBudgetById(id);
            budgetRepository.delete(budget);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Budget not found");
        } catch (Exception e) {
            logger.error("Error deleting budget", e);
            throw new RuntimeException("Error deleting budget", e);
        }
    }

    private Budget getBudgetById(Long id) {
        Long userId = userService.getCurrentUserId();
        Budget budget = budgetRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Budget not found"));

        if (!budget.getUser().getId().equals(userId)) {
            throw new ResourceNotFoundException("Budget not found");
        }

        return budget;
    }

    @Transactional
    public void updateBudgetSpent(Long id, BigDecimal amount) {
        try {
            Budget budget = getBudgetById(id);
            budget.setSpent(budget.getSpent().add(amount));
            budgetRepository.save(budget);
        } catch (Exception e) {
            logger.error("Error updating budget spent amount", e);
            throw new RuntimeException("Error updating budget spent amount", e);
        }
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/service/DashboardService.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.dashboard.*;
import com.tamthong.finance_tracker_api.model.Transaction;
import com.tamthong.finance_tracker_api.model.TransactionType;
import com.tamthong.finance_tracker_api.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DashboardService {
    private final TransactionRepository transactionRepository;
    private final UserService userService;

    public List<SpendingTrendDTO> getSpendingTrends(LocalDate startDate, LocalDate endDate) {
        Long userId = userService.getCurrentUserId();
        List<SpendingTrendDTO> trends = new ArrayList<>();

        // Lấy tất cả transactions trong khoảng thời gian
        List<Transaction> transactions = transactionRepository
                .findByUserIdAndDateBetweenOrderByDateDesc(userId, startDate, endDate);

        // Nhóm transactions theo tháng
        Map<YearMonth, SpendingTrendDTO> trendMap = new TreeMap<>();

        // Khởi tạo tất cả các tháng trong khoảng thời gian
        YearMonth start = YearMonth.from(startDate);
        YearMonth end = YearMonth.from(endDate);
        while (!start.isAfter(end)) {
            trendMap.put(start, SpendingTrendDTO.builder()
                    .month(start.toString())
                    .income(BigDecimal.ZERO)
                    .expenses(BigDecimal.ZERO)
                    .build());
            start = start.plusMonths(1);
        }

        // Tính toán income và expenses cho mỗi tháng
        for (Transaction transaction : transactions) {
            YearMonth yearMonth = YearMonth.from(transaction.getDate());
            SpendingTrendDTO monthTrend = trendMap.get(yearMonth);

            if (monthTrend != null) {
                if (transaction.getType() == TransactionType.INCOME) {
                    monthTrend.setIncome(monthTrend.getIncome().add(transaction.getAmount()));
                } else {
                    monthTrend.setExpenses(monthTrend.getExpenses().add(transaction.getAmount()));
                }
            }
        }

        return new ArrayList<>(trendMap.values());
    }

    public DashboardOverviewDTO getOverview(LocalDate startDate, LocalDate endDate) {
        Long userId = userService.getCurrentUserId();
        List<Transaction> transactions = transactionRepository
                .findByUserIdAndDateBetweenOrderByDateDesc(userId, startDate, endDate);

        BigDecimal income = calculateTotalByType(transactions, TransactionType.INCOME);
        BigDecimal expenses = calculateTotalByType(transactions, TransactionType.EXPENSE);
        BigDecimal balance = income.subtract(expenses);

        double savingsRate = 0.0;
        if (income.compareTo(BigDecimal.ZERO) > 0) {
            savingsRate = balance
                    .divide(income, 4, RoundingMode.HALF_UP)
                    .multiply(BigDecimal.valueOf(100))
                    .doubleValue();
        }

        return DashboardOverviewDTO.builder()
                .totalBalance(balance)
                .monthlyIncome(income)
                .monthlyExpenses(expenses)
                .savingsRate(savingsRate)
                .build();
    }

    public List<ExpenseByCategoryDTO> getExpensesByCategory(LocalDate startDate, LocalDate endDate) {
        Long userId = userService.getCurrentUserId();
        List<Transaction> expenses = transactionRepository
                .findByUserIdAndDateBetweenOrderByDateDesc(userId, startDate, endDate)
                .stream()
                .filter(t -> t.getType() == TransactionType.EXPENSE)
                .collect(Collectors.toList());

        Map<String, BigDecimal> categoryTotals = expenses.stream()
                .collect(Collectors.groupingBy(
                        Transaction::getCategory,
                        Collectors.reducing(
                                BigDecimal.ZERO,
                                Transaction::getAmount,
                                BigDecimal::add)));

        String[] colors = { "#FF8042", "#00C49F", "#FFBB28", "#0088FE", "#FF6B6B", "#4ECDC4" };
        AtomicInteger colorIndex = new AtomicInteger(0);

        return categoryTotals.entrySet().stream()
                .map(entry -> ExpenseByCategoryDTO.builder()
                        .category(entry.getKey())
                        .amount(entry.getValue())
                        .color(colors[colorIndex.getAndIncrement() % colors.length])
                        .build())
                .sorted((a, b) -> b.getAmount().compareTo(a.getAmount()))
                .collect(Collectors.toList());
    }

    public List<AlertDTO> getAlerts(LocalDate startDate, LocalDate endDate) {
        List<AlertDTO> alerts = new ArrayList<>();
        DashboardOverviewDTO overview = getOverview(startDate, endDate);

        if (overview.getMonthlyExpenses().compareTo(overview.getMonthlyIncome()) > 0) {
            alerts.add(AlertDTO.builder()
                    .type("SPENDING")
                    .message("Chi tiêu vượt quá thu nhập trong khoảng thời gian này")
                    .severity("ERROR")
                    .build());
        }

        if (overview.getSavingsRate() < 20) {
            alerts.add(AlertDTO.builder()
                    .type("SAVINGS")
                    .message("Tỷ lệ tiết kiệm dưới 20%. Cân nhắc giảm chi tiêu.")
                    .severity("WARNING")
                    .build());
        }

        return alerts;
    }

    private BigDecimal calculateTotalByType(List<Transaction> transactions, TransactionType type) {
        return transactions.stream()
                .filter(t -> t.getType() == type)
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/service/CategoryService.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.CategoryDTO;
import com.tamthong.finance_tracker_api.model.Category;
import com.tamthong.finance_tracker_api.model.CategoryType;
import com.tamthong.finance_tracker_api.repository.CategoryRepository;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final UserService userService;

    @Transactional(readOnly = true)
    public List<CategoryDTO> getAllCategories() {
        // First get default categories
        List<Category> allCategories = categoryRepository.findByUserIdIsNull();

        // Then get user custom categories
        Long userId = userService.getCurrentUserId();
        allCategories.addAll(categoryRepository.findByUserId(userId));

        return allCategories.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public CategoryDTO createCategory(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setId(UUID.randomUUID().toString());
        category.setName(categoryDTO.getName());
        category.setType(CategoryType.valueOf(categoryDTO.getType()));
        category.setColor(categoryDTO.getColor());
        category.setIcon(categoryDTO.getIcon());
        category.setUser(userService.getCurrentUser()); // Set current user for custom categories

        Category savedCategory = categoryRepository.save(category);
        return convertToDTO(savedCategory);
    }

    @Transactional
    public CategoryDTO updateCategory(String id, CategoryDTO categoryDTO) {
        Category category = getCategoryById(id);

        // Verify if the category belongs to the current user
        if (category.getUser() != null &&
                !category.getUser().getId().equals(userService.getCurrentUserId())) {
            throw new ResourceNotFoundException("Category not found");
        }

        // Only user-created categories can be updated
        if (category.getUser() == null) {
            throw new IllegalStateException("Default categories cannot be modified");
        }

        category.setName(categoryDTO.getName());
        category.setType(CategoryType.valueOf(categoryDTO.getType()));
        category.setColor(categoryDTO.getColor());
        category.setIcon(categoryDTO.getIcon());

        Category updatedCategory = categoryRepository.save(category);
        return convertToDTO(updatedCategory);
    }

    @Transactional
    public void deleteCategory(String id) {
        Category category = getCategoryById(id);

        // Verify if the category belongs to the current user
        if (category.getUser() != null &&
                !category.getUser().getId().equals(userService.getCurrentUserId())) {
            throw new ResourceNotFoundException("Category not found");
        }

        // Only user-created categories can be deleted
        if (category.getUser() == null) {
            throw new IllegalStateException("Default categories cannot be deleted");
        }

        categoryRepository.delete(category);
    }

    @Transactional
    public void initializeDefaultCategories() {
        if (categoryRepository.findByUserIdIsNull().isEmpty()) {
            // Create default income categories
            createDefaultCategory("Salary", CategoryType.INCOME, "#4CAF50", "wallet");
            createDefaultCategory("Investment", CategoryType.INCOME, "#2196F3", "trending-up");
            createDefaultCategory("Business", CategoryType.INCOME, "#9C27B0", "briefcase");
            createDefaultCategory("Other Income", CategoryType.INCOME, "#607D8B", "plus-circle");

            // Create default expense categories
            createDefaultCategory("Food & Dining", CategoryType.EXPENSE, "#FF5722", "coffee");
            createDefaultCategory("Transportation", CategoryType.EXPENSE, "#FF9800", "car");
            createDefaultCategory("Shopping", CategoryType.EXPENSE, "#E91E63", "shopping-bag");
            createDefaultCategory("Housing", CategoryType.EXPENSE, "#795548", "home");
            createDefaultCategory("Utilities", CategoryType.EXPENSE, "#009688", "zap");
            createDefaultCategory("Healthcare", CategoryType.EXPENSE, "#F44336", "heart");
            createDefaultCategory("Entertainment", CategoryType.EXPENSE, "#673AB7", "music");
            createDefaultCategory("Education", CategoryType.EXPENSE, "#3F51B5", "book");
            createDefaultCategory("Other Expenses", CategoryType.EXPENSE, "#9E9E9E", "more-horizontal");
        }
    }

    private void createDefaultCategory(String name, CategoryType type, String color, String icon) {
        Category category = new Category();
        category.setId(UUID.randomUUID().toString());
        category.setName(name);
        category.setType(type);
        category.setColor(color);
        category.setIcon(icon);
        // No user set for default categories
        categoryRepository.save(category);
    }

    private Category getCategoryById(String id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
    }

    private CategoryDTO convertToDTO(Category category) {
        CategoryDTO dto = new CategoryDTO();
        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setType(category.getType().toString());
        dto.setColor(category.getColor());
        dto.setIcon(category.getIcon());
        return dto;
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/service/UserService.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.request.AuthResponse;
import com.tamthong.finance_tracker_api.dto.request.LoginRequest;
import com.tamthong.finance_tracker_api.dto.request.RegisterRequest;
import com.tamthong.finance_tracker_api.exception.UserAlreadyExistsException;
import com.tamthong.finance_tracker_api.mapper.UserMapper;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.repository.UserRepository;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final UserMapper userMapper;

    public Long getCurrentUserId() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return user.getId();
    }

    public User getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new UserAlreadyExistsException("Email already exists");
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        User savedUser = userRepository.save(user);

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, userMapper.toDTO(savedUser));
    }

    @Transactional(readOnly = true)
    public AuthResponse authenticateUser(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, userMapper.toDTO(user));
    }

    @Transactional
    public User save(User user) {
        return userRepository.save(user);
    }

    @Transactional
    public User updateProfile(User user, String newUsername, String newEmail) {
        // Check if email is being changed and if new email already exists
        if (!user.getEmail().equals(newEmail) && userRepository.existsByEmail(newEmail)) {
            throw new UserAlreadyExistsException("Email already exists");
        }

        user.setUsername(newUsername);
        user.setEmail(newEmail);
        return userRepository.save(user);
    }

    @Transactional
    public User updatePassword(User user, String newPassword) {
        user.setPassword(passwordEncoder.encode(newPassword));
        return userRepository.save(user);
    }

    @Transactional
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userRepository.delete(user);
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/service/UserSettingsService.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.UserSettingsDTO;
import com.tamthong.finance_tracker_api.dto.request.UserSettingsRequests.*;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.model.UserSettings;
import com.tamthong.finance_tracker_api.repository.UserSettingsRepository;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserSettingsService {
    private final UserSettingsRepository settingsRepository;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public UserSettingsDTO getCurrentUserSettings() {
        User currentUser = userService.getCurrentUser();
        UserSettings settings = settingsRepository.findByUserId(currentUser.getId())
                .orElseGet(() -> createDefaultSettings(currentUser));
        return mapToDTO(settings);
    }

    public UserSettingsDTO updateProfile(UpdateProfileRequest request) {
        User currentUser = userService.getCurrentUser();
        UserSettings settings = settingsRepository.findByUserId(currentUser.getId())
                .orElseGet(() -> createDefaultSettings(currentUser));

        settings.setName(request.getName());
        settings.setPhone(request.getPhone());
        settings.setAddress(request.getAddress());

        currentUser.setUsername(request.getName());
        userService.save(currentUser); // Save user changes

        UserSettings savedSettings = settingsRepository.save(settings);
        return mapToDTO(savedSettings);
    }

    public void updatePassword(UpdatePasswordRequest request) {
        User currentUser = userService.getCurrentUser();

        if (!passwordEncoder.matches(request.getCurrentPassword(), currentUser.getPassword())) {
            throw new BadCredentialsException("Current password is incorrect");
        }

        currentUser.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userService.save(currentUser);
    }

    public UserSettingsDTO updateNotificationSettings(NotificationSettingsRequest request) {
        User currentUser = userService.getCurrentUser();
        UserSettings settings = settingsRepository.findByUserId(currentUser.getId())
                .orElseGet(() -> createDefaultSettings(currentUser));

        settings.setEmailNotifications(request.getEmailNotifications());
        settings.setBudgetAlerts(request.getBudgetAlerts());
        settings.setTransactionNotifications(request.getTransactionNotifications());

        UserSettings savedSettings = settingsRepository.save(settings);
        return mapToDTO(savedSettings);
    }

    public UserSettingsDTO updatePreferences(PreferencesRequest request) {
        User currentUser = userService.getCurrentUser();
        UserSettings settings = settingsRepository.findByUserId(currentUser.getId())
                .orElseGet(() -> createDefaultSettings(currentUser));

        settings.setCurrency(request.getCurrency());
        settings.setFiscalMonthStartDay(request.getFiscalMonthStartDay());
        settings.setDateFormat(request.getDateFormat());
        settings.setDarkMode(request.getDarkMode());

        UserSettings savedSettings = settingsRepository.save(settings);
        return mapToDTO(savedSettings);
    }

    private UserSettings createDefaultSettings(User user) {
        UserSettings settings = UserSettings.builder()
                .user(user)
                .name(user.getUsername())
                .emailNotifications(true)
                .budgetAlerts(true)
                .transactionNotifications(true)
                .currency("VND")
                .fiscalMonthStartDay(1)
                .dateFormat("DD/MM/YYYY")
                .darkMode(false)
                .build();

        return settingsRepository.save(settings);
    }

    private UserSettingsDTO mapToDTO(UserSettings settings) {
        return UserSettingsDTO.builder()
                .id(settings.getId())
                .userId(settings.getUser().getId())

                .name(settings.getName())
                .email(settings.getUser().getEmail())
                .phone(settings.getPhone())
                .address(settings.getAddress())

                .emailNotifications(settings.getEmailNotifications())
                .budgetAlerts(settings.getBudgetAlerts())
                .transactionNotifications(settings.getTransactionNotifications())

                .currency(settings.getCurrency())
                .fiscalMonthStartDay(settings.getFiscalMonthStartDay())
                .dateFormat(settings.getDateFormat())
                .darkMode(settings.getDarkMode())

                .createdAt(settings.getCreatedAt() != null ? settings.getCreatedAt().toString() : null)
                .updatedAt(settings.getUpdatedAt() != null ? settings.getUpdatedAt().toString() : null)

                .build();
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/service/SavingsGoalService.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.SavingsGoalDTO;
import com.tamthong.finance_tracker_api.mapper.SavingsGoalMapper;
import com.tamthong.finance_tracker_api.model.SavingsGoal;
import com.tamthong.finance_tracker_api.repository.SavingsGoalRepository;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SavingsGoalService {
    private final SavingsGoalRepository savingsGoalRepository;
    private final SavingsGoalMapper savingsGoalMapper;
    private final UserService userService;

    @Transactional(readOnly = true)
    public List<SavingsGoalDTO> getAllGoalsByUser() {
        Long userId = userService.getCurrentUserId();
        return savingsGoalRepository.findByUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .map(savingsGoalMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public SavingsGoalDTO createGoal(SavingsGoalDTO goalDTO) {
        SavingsGoal goal = savingsGoalMapper.toEntity(goalDTO);
        goal.setUser(userService.getCurrentUser());
        SavingsGoal savedGoal = savingsGoalRepository.save(goal);
        return savingsGoalMapper.toDTO(savedGoal);
    }

    @Transactional
    public SavingsGoalDTO updateGoal(Long id, SavingsGoalDTO goalDTO) {
        SavingsGoal existingGoal = getGoalById(id);
        SavingsGoal updatedGoal = savingsGoalMapper.toEntity(goalDTO);
        updatedGoal.setId(id);
        updatedGoal.setUser(existingGoal.getUser());
        SavingsGoal savedGoal = savingsGoalRepository.save(updatedGoal);
        return savingsGoalMapper.toDTO(savedGoal);
    }

    @Transactional
    public void deleteGoal(Long id) {
        SavingsGoal goal = getGoalById(id);
        savingsGoalRepository.delete(goal);
    }

    private SavingsGoal getGoalById(Long id) {
        Long userId = userService.getCurrentUserId();
        SavingsGoal goal = savingsGoalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Goal not found"));

        if (!goal.getUser().getId().equals(userId)) {
            throw new ResourceNotFoundException("Goal not found");
        }

        return goal;
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/service/CustomUserDetailsService.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return (UserDetails) userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/service/TransactionService.java

```
package com.tamthong.finance_tracker_api.service;

import com.tamthong.finance_tracker_api.dto.TransactionDTO;
import com.tamthong.finance_tracker_api.exception.ResourceNotFoundException;
import com.tamthong.finance_tracker_api.model.Transaction;
import com.tamthong.finance_tracker_api.model.TransactionStatus;
import com.tamthong.finance_tracker_api.model.User;
import com.tamthong.finance_tracker_api.repository.TransactionRepository;
import com.tamthong.finance_tracker_api.mapper.TransactionMapper;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final TransactionMapper transactionMapper;
    private final UserService userService;

    @Transactional(readOnly = true)
    public List<TransactionDTO> getAllTransactionsByUser() {
        Long userId = userService.getCurrentUserId();
        return transactionRepository.findByUserIdOrderByDateDesc(userId)
                .stream()
                .map(transactionMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public TransactionDTO getTransaction(Long id) {
        Transaction transaction = getTransactionById(id);
        return transactionMapper.toDTO(transaction);
    }

    @Transactional
    public TransactionDTO createTransaction(TransactionDTO transactionDTO) {
        try {
            User currentUser = userService.getCurrentUser();

            Transaction transaction = transactionMapper.toEntity(transactionDTO);
            transaction.setUser(currentUser);

            // Set default values if not provided
            if (transaction.getDate() == null) {
                transaction.setDate(LocalDate.now());
            }
            if (transaction.getStatus() == null) {
                transaction.setStatus(TransactionStatus.COMPLETED);
            }

            Transaction savedTransaction = transactionRepository.save(transaction);
            return transactionMapper.toDTO(savedTransaction);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error creating transaction: " + e.getMessage());
        }
    }

    @Transactional
    public TransactionDTO updateTransaction(Long id, TransactionDTO transactionDTO) {
        Transaction existingTransaction = getTransactionById(id);

        Transaction updatedTransaction = transactionMapper.toEntity(transactionDTO);
        updatedTransaction.setId(id);
        updatedTransaction.setUser(existingTransaction.getUser());

        // Preserve existing values if not provided in update
        if (updatedTransaction.getStatus() == null) {
            updatedTransaction.setStatus(existingTransaction.getStatus());
        }
        if (updatedTransaction.getDate() == null) {
            updatedTransaction.setDate(existingTransaction.getDate());
        }

        Transaction savedTransaction = transactionRepository.save(updatedTransaction);
        return transactionMapper.toDTO(savedTransaction);
    }

    @Transactional
    public void deleteTransaction(Long id) {
        Transaction transaction = getTransactionById(id);
        transactionRepository.delete(transaction);
    }

    private Transaction getTransactionById(Long id) {
        Long userId = userService.getCurrentUserId();
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Transaction not found"));

        if (!transaction.getUser().getId().equals(userId)) {
            throw new ResourceNotFoundException("Transaction not found");
        }

        return transaction;
    }

    public Page<TransactionDTO> getAllTransactionsByUser(Pageable pageable) {
        Long userId = userService.getCurrentUserId();
        Page<Transaction> transactionsPage = transactionRepository
                .findByUserIdOrderByDateDesc(userId, pageable);
        return transactionsPage.map(transactionMapper::toDTO);
    }

    @Transactional
    public List<TransactionDTO> createBulkTransactions(List<TransactionDTO> transactionsDTO) {
        User currentUser = userService.getCurrentUser();
        List<Transaction> transactions = transactionsDTO.stream()
                .map(transactionMapper::toEntity)
                .peek(transaction -> {
                    transaction.setUser(currentUser);
                    if (transaction.getStatus() == null) {
                        transaction.setStatus(TransactionStatus.COMPLETED);
                    }
                })
                .collect(Collectors.toList());

        List<Transaction> savedTransactions = transactionRepository.saveAll(transactions);
        return savedTransactions.stream()
                .map(transactionMapper::toDTO)
                .collect(Collectors.toList());
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/exception/GlobalExceptionHandler.java

```
package com.tamthong.finance_tracker_api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFoundException(ResourceNotFoundException ex) {
        ErrorResponse response = new ErrorResponse(
                HttpStatus.NOT_FOUND.value(),
                ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ErrorResponse> handleBadCredentialsException(BadCredentialsException ex) {
        ErrorResponse response = new ErrorResponse(
                HttpStatus.UNAUTHORIZED.value(),
                "Invalid email or password");
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResponse> handleIllegalArgumentException(IllegalArgumentException ex) {
        ErrorResponse response = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
        ErrorResponse response = new ErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "An unexpected error occurred");
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<Object> handleUserAlreadyExistsException(
            UserAlreadyExistsException ex) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", LocalDateTime.now());
        body.put("message", ex.getMessage());

        return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Object> handleRuntimeException(RuntimeException ex) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", LocalDateTime.now());
        body.put("message", ex.getMessage());

        return new ResponseEntity<>(body, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/exception/ErrorResponse.java

```
package com.tamthong.finance_tracker_api.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorResponse {
    private int status;
    private String message;
}
```

### 📄 src/main/java/com/tamthong/finance_tracker_api/exception/ResourceNotFoundException.java

```
package com.tamthong.finance_tracker_api.exception;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/exception/UserAlreadyExistsException.java

```
package com.tamthong.finance_tracker_api.exception;

public class UserAlreadyExistsException extends RuntimeException {
    public UserAlreadyExistsException(String message) {
        super(message);
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/config/ApplicationConfig.java

```
package com.tamthong.finance_tracker_api.config;


import com.tamthong.finance_tracker_api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final UserRepository userRepository;

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

### 📄 src/main/java/com/tamthong/finance_tracker_api/config/DataSeeder.java

```
package com.tamthong.finance_tracker_api.config;

import com.tamthong.finance_tracker_api.model.*;
import com.tamthong.finance_tracker_api.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Component
@RequiredArgsConstructor
public class DataSeeder {
    private final UserRepository userRepository;
    private final TransactionRepository transactionRepository;
    private final BudgetRepository budgetRepository;
    private final SavingsGoalRepository savingsGoalRepository;
    private final Random random = new Random();

    public void seedDataForUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        LocalDate lastTransactionDate = transactionRepository.findTopByUserIdOrderByDateDesc(userId)
                .map(Transaction::getDate)
                .orElse(LocalDate.now().minusMonths(6));

        List<String> categories = Arrays.asList(
                "Food & Dining", "Transportation", "Shopping", "Entertainment",
                "Bills & Utilities", "Health", "Travel", "Education");

        List<String> paymentMethods = Arrays.asList(
                "Cash", "Credit Card", "Bank Transfer", "E-Wallet");

        // Create transactions from the last transaction date to now
        LocalDate now = LocalDate.now();
        LocalDate startDate = lastTransactionDate.plusDays(1);

        for (LocalDate date = startDate; date.isBefore(now.plusDays(1)); date = date.plusDays(1)) {
            // Create 1-3 transactions per day
            int transactionsPerDay = random.nextInt(3) + 1;
            for (int j = 0; j < transactionsPerDay; j++) {
                TransactionType type = random.nextDouble() < 0.7 ? TransactionType.EXPENSE : TransactionType.INCOME;

                BigDecimal amount;
                String category;
                if (type == TransactionType.EXPENSE) {
                    amount = BigDecimal.valueOf(random.nextInt(1000000) + 50000);
                    category = categories.get(random.nextInt(categories.size()));
                } else {
                    amount = BigDecimal.valueOf(random.nextInt(5000000) + 5000000);
                    category = "Salary";
                }

                Transaction transaction = Transaction.builder()
                        .user(user)
                        .amount(amount)
                        .type(type)
                        .category(category)
                        .date(date)
                        .description(generateDescription(type, category))
                        .paymentMethod(paymentMethods.get(random.nextInt(paymentMethods.size())))
                        .status(TransactionStatus.COMPLETED)
                        .build();
                transactionRepository.save(transaction);
            }
        }

        // Update or create budgets for the current month
        for (String category : categories) {
            // Check if budget exists for this category and month
            LocalDate monthStart = now.withDayOfMonth(1);
            LocalDate monthEnd = now.withDayOfMonth(now.lengthOfMonth());

            Budget existingBudget = budgetRepository
                    .findByUserIdAndCategoryAndStartDateAndEndDate(
                            userId, category, monthStart, monthEnd)
                    .orElse(null);

            if (existingBudget == null) {
                Budget budget = Budget.builder()
                        .user(user)
                        .category(category)
                        .limit(BigDecimal.valueOf(random.nextInt(5000000) + 2000000))
                        .spent(BigDecimal.valueOf(random.nextInt(3000000) + 1000000))
                        .period(BudgetPeriod.MONTHLY)
                        .startDate(monthStart)
                        .endDate(monthEnd)
                        .build();
                budgetRepository.save(budget);
            }
        }

        // Add more savings goals if less than 3 exist
        long goalsCount = savingsGoalRepository.countByUserId(userId);
        if (goalsCount < 3) {
            List<String> goalNames = Arrays.asList(
                    "Emergency Fund", "New Laptop", "Vacation", "Wedding",
                    "House Down Payment", "Car");

            for (int i = 0; i < 3 - goalsCount; i++) {
                String goalName = goalNames.get(random.nextInt(goalNames.size()));
                BigDecimal targetAmount = BigDecimal.valueOf(random.nextInt(100000000) + 50000000);
                BigDecimal currentAmount = targetAmount.multiply(BigDecimal.valueOf(random.nextDouble()));

                SavingsGoal goal = SavingsGoal.builder()
                        .user(user)
                        .name(goalName)
                        .targetAmount(targetAmount)
                        .currentAmount(currentAmount)
                        .deadline(now.plusMonths(random.nextInt(12) + 6))
                        .color(generateRandomColor())
                        .build();
                savingsGoalRepository.save(goal);
            }
        }
    }

    private String generateDescription(TransactionType type, String category) {
        if (type == TransactionType.INCOME) {
            return "Monthly Salary";
        }

        List<String> descriptions;
        switch (category) {
            case "Food & Dining":
                descriptions = Arrays.asList(
                        "Lunch at Restaurant", "Grocery Shopping", "Coffee Shop",
                        "Dinner with Friends", "Food Delivery");
                break;
            case "Transportation":
                descriptions = Arrays.asList(
                        "Taxi Ride", "Bus Ticket", "Fuel", "Parking Fee",
                        "Vehicle Maintenance");
                break;
            case "Shopping":
                descriptions = Arrays.asList(
                        "Clothing Purchase", "Electronics", "Home Supplies",
                        "Books", "Personal Care Items");
                break;
            case "Entertainment":
                descriptions = Arrays.asList(
                        "Movie Tickets", "Concert", "Game Purchase",
                        "Streaming Service", "Hobby Supplies");
                break;
            default:
                descriptions = Arrays.asList(
                        "General Purchase", "Service Payment", "Miscellaneous",
                        "Regular Payment", "Monthly Fee");
        }
        return descriptions.get(random.nextInt(descriptions.size()));
    }

    private String generateRandomColor() {
        String[] colors = {
                "#FF8042", "#00C49F", "#FFBB28", "#0088FE",
                "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"
        };
        return colors[random.nextInt(colors.length)];
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/config/CategoryDataLoader.java

```
package com.tamthong.finance_tracker_api.config;

import com.tamthong.finance_tracker_api.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CategoryDataLoader implements CommandLineRunner {
    private final CategoryService categoryService;

    @Override
    public void run(String... args) {
        categoryService.initializeDefaultCategories();
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/config/DateConfig.java

```
package com.tamthong.finance_tracker_api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.datetime.standard.DateTimeFormatterRegistrar;
import org.springframework.format.support.DefaultFormattingConversionService;
import org.springframework.format.support.FormattingConversionService;

import java.time.format.DateTimeFormatter;

@Configuration
public class DateConfig {
    @Bean
    public FormattingConversionService conversionService() {
        DefaultFormattingConversionService conversionService = 
            new DefaultFormattingConversionService(false);

        DateTimeFormatterRegistrar registrar = new DateTimeFormatterRegistrar();
        registrar.setDateFormatter(DateTimeFormatter.ISO_DATE);
        registrar.setDateTimeFormatter(DateTimeFormatter.ISO_DATE_TIME);
        registrar.registerFormatters(conversionService);

        return conversionService;
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/config/WebConfig.java

```
package com.tamthong.finance_tracker_api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600L);
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/model/BudgetPeriod.java

```
package com.tamthong.finance_tracker_api.model;

public enum BudgetPeriod {
    WEEKLY,
    MONTHLY,
    YEARLY
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/model/UserSettings.java

```
package com.tamthong.finance_tracker_api.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_settings")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserSettings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Profile settings
    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    // Notification settings
    @Column(name = "email_notifications")
    @Builder.Default
    private Boolean emailNotifications = true;

    @Column(name = "budget_alerts")
    @Builder.Default
    private Boolean budgetAlerts = true;

    @Column(name = "transaction_notifications")
    @Builder.Default
    private Boolean transactionNotifications = true;

    // Preferences
    @Column(name = "currency")
    @Builder.Default
    private String currency = "VND";

    @Column(name = "fiscal_month_start_day")
    @Builder.Default
    private Integer fiscalMonthStartDay = 1;

    @Column(name = "date_format")
    @Builder.Default
    private String dateFormat = "DD/MM/YYYY";

    @Column(name = "dark_mode")
    @Builder.Default
    private Boolean darkMode = false;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/model/Transaction.java

```
package com.tamthong.finance_tracker_api.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Builder
@Table(name = "transactions")
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private BigDecimal amount;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String category;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TransactionType type;

    @Column(nullable = false)
    private LocalDate date;

    @Column(name = "payment_method")
    private String paymentMethod;

    private String notes;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TransactionStatus status = TransactionStatus.COMPLETED;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/model/TransactionType.java

```
package com.tamthong.finance_tracker_api.model;

public enum TransactionType {
    INCOME,
    EXPENSE
}
```

### 📄 src/main/java/com/tamthong/finance_tracker_api/model/Budget.java

```
package com.tamthong.finance_tracker_api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Min;

@Data
@Entity
@Getter
@Setter
@Table(name = "budgets")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @NotBlank(message = "Category is required")
    @Column(nullable = false)
    private String category;

    @NotNull(message = "Limit amount is required")
    @Min(value = 0, message = "Limit amount must be positive")
    @Column(name = "limit_amount", nullable = false)
    private BigDecimal limit;

    @Column(name = "spent_amount", nullable = false)
    @Builder.Default
    private BigDecimal spent = BigDecimal.ZERO;

    @NotNull(message = "Period is required")
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BudgetPeriod period;

    @NotNull(message = "Start date is required")
    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @NotNull(message = "End date is required")
    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/model/Role.java

```
package com.tamthong.finance_tracker_api.model;

public enum Role {
    USER,
    ADMIN
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/model/CategoryType.java

```
package com.tamthong.finance_tracker_api.model;

public enum CategoryType {
    INCOME,
    EXPENSE,
    BOTH
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/model/TransactionStatus.java

```
package com.tamthong.finance_tracker_api.model;

public enum TransactionStatus {
    COMPLETED,
    PENDING,
    CANCELLED
}
```

### 📄 src/main/java/com/tamthong/finance_tracker_api/model/User.java

```
package com.tamthong.finance_tracker_api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        // Add roles or authorities here, for example:
        // authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
        return authorities;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String getUsername() {
        return this.email;
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/model/SavingsGoal.java

```
package com.tamthong.finance_tracker_api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "savings_goals")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SavingsGoal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String name;

    @Column(name = "target_amount", nullable = false)
    private BigDecimal targetAmount;

    @Column(name = "current_amount", nullable = false)
    @Builder.Default
    private BigDecimal currentAmount = BigDecimal.ZERO;

    @Column(nullable = false)
    private LocalDate deadline;

    private String color;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/model/Category.java

```
package com.tamthong.finance_tracker_api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Entity
@Table(name = "categories")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Category {
    @Id
    private String id;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CategoryType type;

    private String color;

    private String icon;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // null for default categories

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/security/SecurityConfig.java

```
package com.tamthong.finance_tracker_api.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
        private final JwtAuthenticationFilter jwtAuthFilter;
        private final AuthenticationProvider authenticationProvider;

        private static final String[] WHITE_LIST_URL = {
                        "/api/auth/**",
                        "/api/test/public",
                        "/error",
                        "/v3/api-docs/**",
                        "/swagger-ui/**"
        };

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http
                                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                                .csrf(csrf -> csrf.disable())
                                .authorizeHttpRequests(auth -> auth
                                                .requestMatchers(WHITE_LIST_URL).permitAll()
                                                .anyRequest().authenticated())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

                return http.build();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration configuration = new CorsConfiguration();
                configuration.setAllowedOrigins(List.of("http://localhost:5173"));
                configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"));
                configuration.setAllowedHeaders(Arrays.asList(
                                "Authorization",
                                "Content-Type",
                                "X-Requested-With",
                                "Accept",
                                "Origin",
                                "Access-Control-Request-Method",
                                "Access-Control-Request-Headers"));
                configuration.setExposedHeaders(List.of("Authorization"));
                configuration.setAllowCredentials(true);
                configuration.setMaxAge(3600L);

                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", configuration);
                return source;
        }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/security/JwtAuthenticationFilter.java

```
package com.tamthong.finance_tracker_api.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain) throws ServletException, IOException {

        // Skip JWT check for authentication endpoints
        if (request.getServletPath().contains("/api/auth")) {
            filterChain.doFilter(request, response);
            return;
        }

        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;

        try {
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                filterChain.doFilter(request, response);
                return;
            }

            jwt = authHeader.substring(7);
            userEmail = jwtService.extractEmail(jwt);

            if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);

                if (jwtService.isTokenValid(jwt, userDetails)) {
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null,
                            userDetails.getAuthorities());
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        } catch (Exception e) {
            logger.error("JWT Authentication failed: {}", e.getMessage());
        }

        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getServletPath();
        return path.startsWith("/api/auth") ||
                path.equals("/error") ||
                path.startsWith("/api/test/public");
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/security/JwtService.java

```
package com.tamthong.finance_tracker_api.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {
    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    public String extractEmail(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public String generateToken(String email) {
        return generateToken(new HashMap<>(), email);
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String email = extractEmail(token);
        return (email.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private String generateToken(Map<String, Object> extraClaims, String email) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(email)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSigningKey() {
        byte[] keyBytes = secretKey.getBytes();
        return Keys.hmacShaKeyFor(keyBytes);
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/repository/UserRepository.java

```
package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByUsername(String username);
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/repository/CategoryRepository.java

```
package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, String> {
    List<Category> findByUserIdIsNull();

    List<Category> findByUserId(Long userId);

    boolean existsByNameAndUserId(String name, Long userId);
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/repository/SavingsGoalRepository.java

```
package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.SavingsGoal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SavingsGoalRepository extends JpaRepository<SavingsGoal, Long> {
    List<SavingsGoal> findByUserIdOrderByCreatedAtDesc(Long userId);

    long countByUserId(Long userId);
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/repository/UserSettingsRepository.java

```
package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.UserSettings;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserSettingsRepository extends JpaRepository<UserSettings, Long> {
    Optional<UserSettings> findByUserId(Long userId);
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/repository/TransactionRepository.java

```
package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.Transaction;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserIdOrderByDateDesc(Long userId);

    List<Transaction> findByUserIdAndDateBetweenOrderByDateDesc(Long userId, LocalDate startDate, LocalDate endDate);

    List<Transaction> findByUserIdAndCategoryOrderByDateDesc(Long userId, String category);

    Optional<Transaction> findTopByUserIdOrderByDateDesc(Long userId);

    Page<Transaction> findByUserIdOrderByDateDesc(Long userId, Pageable pageable);
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/repository/BudgetRepository.java

```
package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long> {
    List<Budget> findByUserIdOrderByCreatedAtDesc(Long userId);

    List<Budget> findByUserIdAndCategory(Long userId, String category);

    Optional<Budget> findByUserIdAndCategoryAndStartDateAndEndDate(
        Long userId, String category, LocalDate startDate, LocalDate endDate
    );
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/SavingsGoalDTO.java

```
package com.tamthong.finance_tracker_api.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class SavingsGoalDTO {
    private Long id;
    private Long userId;
    private String name;
    private BigDecimal targetAmount;
    private BigDecimal currentAmount;
    private LocalDate deadline;
    private String color;
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/UserSettingsDTO.java

```
package com.tamthong.finance_tracker_api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserSettingsDTO {
    private Long id;
    private Long userId;
    
    // Profile fields
    private String name;
    private String email;
    private String phone;
    private String address;
    
    // Notification fields
    private Boolean emailNotifications;
    private Boolean budgetAlerts;
    private Boolean transactionNotifications;
    
    // Preferences fields
    private String currency;
    private Integer fiscalMonthStartDay;
    private String dateFormat;
    private Boolean darkMode;
    
    // Add metadata fields if needed
    private String createdAt;
    private String updatedAt;
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/UserDTO.java

```
package com.tamthong.finance_tracker_api.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String username;
    private String email;
}
```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/TransactionDTO.java

```
package com.tamthong.finance_tracker_api.dto;

import com.tamthong.finance_tracker_api.model.TransactionType;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class TransactionDTO {
    private Long id;
    private Long userId;
    private BigDecimal amount;
    private String description;
    private String category;
    private TransactionType type;
    private LocalDate date;
    private String paymentMethod;
    private String notes;
    // private TransactionStatus status;
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/BudgetDTO.java

```
package com.tamthong.finance_tracker_api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BudgetDTO {
    private Long id;
    private Long userId;
    private String category;
    private BigDecimal limit;
    private BigDecimal spent;
    private String period;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalDate lastUpdated;
    @Override
    public String toString() {
        return "BudgetDTO{" +
                "id=" + id +
                ", userId=" + userId +
                ", category='" + category + '\'' +
                ", limit=" + limit +
                ", spent=" + spent +
                ", period='" + period + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", lastUpdated=" + lastUpdated +
                '}';
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/CategoryDTO.java

```
package com.tamthong.finance_tracker_api.dto;

import lombok.Data;

@Data
public class CategoryDTO {
    private String id;
    private String name;
    private String type; // INCOME, EXPENSE, BOTH
    private String color;
    private String icon;
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/constants/SettingsConstants.java

```
package com.tamthong.finance_tracker_api.constants;

public class SettingsConstants {
    // Currency
    public static final String DEFAULT_CURRENCY = "VND";
    public static final String[] SUPPORTED_CURRENCIES = { "VND", "USD", "EUR", "JPY" };

    // Date Format
    public static final String DEFAULT_DATE_FORMAT = "DD/MM/YYYY";
    public static final String[] SUPPORTED_DATE_FORMATS = {
            "DD/MM/YYYY",
            "MM/DD/YYYY",
            "YYYY-MM-DD"
    };

    // Fiscal Month
    public static final int DEFAULT_FISCAL_MONTH_START_DAY = 1;
    public static final int MIN_FISCAL_MONTH_START_DAY = 1;
    public static final int MAX_FISCAL_MONTH_START_DAY = 28;

    // Default settings
    public static final boolean DEFAULT_EMAIL_NOTIFICATIONS = true;
    public static final boolean DEFAULT_BUDGET_ALERTS = true;
    public static final boolean DEFAULT_TRANSACTION_NOTIFICATIONS = true;
    public static final boolean DEFAULT_DARK_MODE = false;

    private SettingsConstants() {
        // Private constructor to prevent instantiation
    }
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/dashboard/ExpenseByCategoryDTO.java

```
package com.tamthong.finance_tracker_api.dto.dashboard;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExpenseByCategoryDTO {
    private String category;
    private BigDecimal amount;
    private String color;
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/dashboard/AlertDTO.java

```
package com.tamthong.finance_tracker_api.dto.dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AlertDTO {
    private String type;
    private String message;
    private String severity; // INFO, WARNING, ERROR
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/dashboard/DashboardOverviewDTO.java

```
package com.tamthong.finance_tracker_api.dto.dashboard;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DashboardOverviewDTO {
    private BigDecimal totalBalance;
    private BigDecimal monthlyIncome;
    private BigDecimal monthlyExpenses;
    private double savingsRate;
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/dashboard/SpendingTrendDTO.java

```
// DashboardOverviewDTO.java
package com.tamthong.finance_tracker_api.dto.dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpendingTrendDTO {
    private String month;
    private BigDecimal income;
    private BigDecimal expenses;
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/request/AuthResponse.java

```
package com.tamthong.finance_tracker_api.dto.request;

import com.tamthong.finance_tracker_api.dto.UserDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String token;
    private UserDTO user;
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/request/LoginRequest.java

```
package com.tamthong.finance_tracker_api.dto.request;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/request/RegisterRequest.java

```
package com.tamthong.finance_tracker_api.dto.request;

import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String email;
    private String password;
}

```

### 📄 src/main/java/com/tamthong/finance_tracker_api/dto/request/UserSettingsRequests.java

```
package com.tamthong.finance_tracker_api.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UserSettingsRequests {

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UpdatePasswordRequest {
        @NotBlank(message = "Current password is required")
        private String currentPassword;

        @NotBlank(message = "New password is required")
        @Size(min = 6, message = "Password must be at least 6 characters long")
        private String newPassword;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UpdateProfileRequest {
        @NotBlank(message = "Name is required")
        private String name;

        private String phone;
        private String address;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class NotificationSettingsRequest {
        @NotNull(message = "Email notifications setting is required")
        private Boolean emailNotifications;

        @NotNull(message = "Budget alerts setting is required")
        private Boolean budgetAlerts;

        @NotNull(message = "Transaction notifications setting is required")
        private Boolean transactionNotifications;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PreferencesRequest {
        private String currency;
        private Integer fiscalMonthStartDay;
        private String dateFormat;
        private Boolean darkMode;
    }
}

```


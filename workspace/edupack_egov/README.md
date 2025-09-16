# uiadapter17-egov-sample

repository location 
 - http://mangosteen.tobesoft.co.kr/nexus/repository/maven-public/
 - nexacroN용 uiadapter 적용
 - nexacroN xapi 적용
 
버전정보 
 - 개발자용 개발환경 버전 3.10.0 (64bit)
 - Eclipse 2020-06 (4.16.0) 적용
 - JDK는 1.8 버전 사용이 필수 : **eclipse.ini 에 jdk 경로 추가 (예시)
	-vm
	C:Program Files\Java\jdk1.8.0_45\bin\javaw.exe
 - 이클립스의 파일에 한글깨짐이 발생 시 : eclipse.ini에 이클립스의 파일 포멧을 UTF-8로 설정 (ex) -Dfile.encoding=UTF-8
 - 템플릿 생성 위저드를 이용하여 프로젝트 생성시 일부 DML파일의 한글깨짐 현상 시 해당 DML파일의 encoding형식을 UTF-8에서 EUC-KR로 변경
 - 
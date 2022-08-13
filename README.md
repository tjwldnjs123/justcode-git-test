# git 용어 정리

- Commit  
```
파일 및 폴더의 추가/변경 사항들을 저장할때(기록할 때) 사용한다.  
명령어:  
git add <파일이름>  
git commit -m "들어갈 내용"  
```
- Push 
```
commit한 내용 (head의 변경내용)을 remote repo(원격저장소)에 올린다.  
즉, local에서 변경한 내용을 원격 저장소로 업로드 한다.  
명령어: 
git push <branch name> 
```
- Pull 
```
remote repo(원격저장소)의 내용을 local repo(로컬 저장소)에 반영한다.  
fetch + merge의 기능이다.  
명령어:  
git pull
```

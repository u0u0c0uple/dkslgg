# nginx의 안정 버전의 Alpine Linux 기반 이미지를 사용합니다.
FROM nginx:stable-alpine

# 작업 디렉터리를 '/app'으로 설정합니다.
WORKDIR /app

# '/app' 디렉터리 내에 'build' 폴더를 생성합니다.
RUN mkdir ./build

# 호스트의 'build' 폴더 내용을 컨테이너의 '/app/build'에 추가합니다.
# 이 폴더는 일반적으로 React 빌드 결과물을 포함합니다.
ADD ./dist ./build

# 기존의 nginx 설정 파일을 삭제합니다.
RUN rm /etc/nginx/conf.d/default.conf

# 호스트의 'front.conf' 파일을 nginx 설정으로 복사합니다.
# 이 파일은 nginx가 어떻게 트래픽을 라우팅할지 정의합니다.
COPY ./front.conf /etc/nginx/conf.d

# 컨테이너가 3126 포트에서 수신하도록 설정합니다.
EXPOSE 3126

# nginx를 실행시킵니다. 'daemon off;'은 백그라운드에서 실행되지 않도록 합니다.
CMD ["nginx", "-g", "daemon off;"]
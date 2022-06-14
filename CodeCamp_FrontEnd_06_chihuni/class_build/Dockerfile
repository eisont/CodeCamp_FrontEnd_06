FROM node:14


# 커서를 깜빡깜빡하는 위치
WORKDIR /class_build/
# RUN mkdir class_build 를 따로 만들어 줄 필요 없음 COPY 하면 자동으로 생성이 됩니다.
# class_build 안에 모든 것을 넣어줘
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start
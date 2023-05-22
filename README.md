# Welcome to FPT ReactJs Trainning and Sharing knowledge
Các project được dựa theo tài liệu trainning tại : https://insight.fsoft.com.vn/confluence/display/FHCMCFSG/REACTJS

## Yêu cầu

visual studio code editor : https://code.visualstudio.com/download

nodejs: https://nodejs.org/en/download/

yarn : `$npm install --global yarn`

a developer: it you.

## Hướng dẫn :
### Project 1:

Tại thư mục root, cd vào trong project 1:

`$ cd pj1_simple_login`

install dependencies

`$ npm i`

run project 

`$ npm start`

<img src="/image/pj1-running.png" alt="drawing" width="600"/>

### Project 2 : 

Gồm 2 thư mục `$html/` chứa tài nguyên web tĩnh ( HTML ), nhiệm vụ là convert - refactor qua thành reactjs, edit source code tại `$react_js/`

step 1 : mở file `$html/index.html` bằng trình duyệt, chia tách layout thành các component nhỏ.

<img src="/image/pj2-html.png" alt="drawing" width="600"/>

step 2 : vào trong thư mục `$react_js/`

`$cd pj2_convert_html_to_reactjs/react_js/`

run app

`$npm start`

<img src="/image/pj2-reactjs.png" alt="drawing" width="600"/>


step 3: migrate từng phần từ `$html/` sang `$react_js/` , copy các tài nguyên từ `$html/` ( css, font, img, js ) sang nếu cần

### Project 3 : 
Free style: 

Init một react application và code todo_app

`$ cd pj3_create_todo_app`

```sh
npx create-react-app todo_app
cd todo_app
npm start
```

yêu cầu : 
- Build UI base HTML, CSS in JSX file, css file.
- Using PropTypes define variable from props.
- We can CRUD(Create/Read/Update/Delete) a todo.
- Using hook to store data in component ( useState, useEffect)
- Using Redux to store global app. Define these types, actions, and reducers.
- Time Limit:  2 weeks
- Create a merge request to review
### Project 4 : 
Maintaince 1 application có sẵn : 

chi tiết : https://insight.fsoft.com.vn/confluence/pages/viewpage.action?pageId=252739939

<img src="/image/pj4-todoapp.png" alt="drawing" width="600"/>




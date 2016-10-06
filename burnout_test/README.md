## cass / scss => 전처리기
> 전처리기: less, cass/scss, stylus 등


### css 방식
```css
#container{color:#fff; background:#fa0;}
#container>#box{color:inherit;}
```

### scss방식
```scss
#container{color:#fff; background:#fa0;
  >#box{color:inherit;}
}
```

cass/scss문제는: html에서는 인식x -> css로 변환처리
sublimetext: cass/scss가 설치가 되어있지 않다! package로 설치!
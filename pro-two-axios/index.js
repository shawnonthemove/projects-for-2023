axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlcoded';
const params = {
  key: '530e8773e4f2df9f72b00124b829c247',
  city: '杭州',
  extensions: 'all'
}

const content = document.querySelector("#content");
const paragraphs = content.querySelectorAll("p");
const city = document.querySelector("#city");
const search = document.querySelector("#search");

search.addEventListener("click", () => {
  params.city = city.value;
  if (city.value.length === 0) {
    alert("请输入城市名称");
    return;
  }
  axios.get('https://restapi.amap.com/v3/weather/weatherInfo?parameters', {
    params: params,
  }).then((res) => {
    if (res.data.forecasts[0] === undefined) {
      for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].innerHTML = '暂无天气信息';
      }
    }
    else {
      for (let i = 0; i < res.data.forecasts[0].casts.length; i++) {
        let {date, daytemp, dayweather, daywind, daypower, nighttemp, nightweather, nightwind, nightpower} = res.data.forecasts[0].casts[i];
        
        paragraphs[i].innerHTML = `
        <strong>日期：${date} ${"   "+ "星期" + "日一二三四五六".charAt(new Date(date).getDay())}</strong>
        <strong>天气情况：${dayweather} ~ ${nightweather}</strong>
        <strong>温度情况：${daytemp} ~ ${nighttemp} \u2103</strong>
        <strong>风向情况：${daywind} ~ ${nightwind}</strong>
        <strong>风力情况：${daypower} ~ ${nightpower}</strong>
        `;
      }
    }
  }).catch((err) => {
    console.log(err);
  });
});

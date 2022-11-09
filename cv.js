const getInfo = async () => {
  const request = new Request("cv.json");
  const response = await fetch(request);
  const cvObj = await response.json();
 
  return cvObj;
}
const populateCv = (cvObj) => {
  let employmentHtml = ``;
  cvObj.employment.forEach(element => { 
      const listItem = `
      <li>
          <h4>${element.time}</h4>
          <p>
              <span class=“job-title”>${element.jobTitle}</span>
              <span class=“bold-text”>${element.location}</span><br>
              ${element.text}
          </p>
      </li>`;
      employmentHtml += listItem;
     
  });
  document.getElementById('employmentList').innerHTML = employmentHtml;
  let educationHtml = ``;
  cvObj.education.forEach(element => {
      const listItem = `<li>${element}</li>`;
      educationHtml += listItem;
 
  });


  document.getElementById('educationList').innerHTML = educationHtml;
  

  let languagesHtml = ``;
  cvObj.languages.forEach(element => { // for every part of languages
      //make a list with ...
      const listItem = `
  <li>
      <p>
          <span class=“languages-motherTongue”>${element.motherTongue}</span><br>
          <span class=“languages-fluency”>${element.fluency}</span><br>
          <span class=“languages-veryGood”>${element.veryGood}</span><br>
      </p>
  </li>`;
  languagesHtml += listItem;
      console.log("languagesHTML", languagesHtml)
      console.log(cvObj.languages);
  });
  document.getElementById('languagesList').innerHTML = languagesHtml;
}
const cvObj = await getInfo();
populateCv(cvObj);




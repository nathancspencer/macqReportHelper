try {
  document.querySelector("#applicationMessages > table:nth-child(1) > tbody > tr:nth-child(2) > td").innerText;
}
catch(err) {
  date = new Date;
  date.setDate(date.getDate() - 3);
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  document.getElementsByName("toDateDayField")[0].value = date.getDate();
  document.getElementsByName("toDateMonthField")[0].value = monthNames[date.getMonth()];
  document.getElementsByName("toDateYearField")[0].value = date.getFullYear();
  
  document.querySelectorAll('[name="check_report_1"]')[0].click();
  document.querySelectorAll('[name="check_report_2"]')[0].click();
  document.querySelectorAll('[name="check_report_3"]')[0].click();
  document.querySelectorAll('[name="check_report_5"]')[0].click();
  document.querySelectorAll('[name="check_report_6"]')[0].click();
  
  if (document.querySelector("#applicationMessages > table:nth-child(4) > tbody > tr:nth-child(3) > td.TableCopyLeft").innerHTML.includes("Investment")) {
    document.querySelectorAll('[name="check_report_19"]')[0].click();
  } else {
    document.querySelectorAll('[name="check_report_17"]')[0].click();
  }
  
  document.querySelectorAll('[value="pdf"]')[0].click();
  
  document.getElementsByName("fromDateDayField")[0].value = date.getDate();
  document.getElementsByName("fromDateMonthField")[0].value = monthNames[date.getMonth()];
  document.getElementsByName("fromDateYearField")[0].value = date.getFullYear() - 1;
}

document.querySelector("#applicationMessages > div > table > tbody > tr > td > a.Nav").click();

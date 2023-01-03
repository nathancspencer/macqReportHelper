const searchBox = document.getElementById("accountddsearchfld");
searchBox.value = "SMITH BARBARA YVONNE (AP) - 802243318";
searchBox.class = "searchInputField typeText ui-autocomplete-input";

searchBox = document.getElementById("accountddfld");
searchBox.value = "802243318";


// Enters the date from three days ago

date = new Date;
date.setDate(date.getDate() - 3);

// fromDateDayField

document.getElementsByName("fromDateDayField")[0].value = date.getDate();

// fromDateMonthField

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
document.getElementsByName("fromDateMonthField")[0].value = monthNames[date.getMonth()];

// fromDateYearField

document.getElementsByName("fromDateYearField")[0].value = date.getFullYear() - 1;

// toDateDayField

document.getElementsByName("toDateDayField")[0].value = date.getDate();

// toDateMonthField

document.getElementsByName("toDateMonthField")[0].value = monthNames[date.getMonth()];

// toDateYearField

document.getElementsByName("toDateYearField")[0].value = date.getFullYear();

// report

document.querySelectorAll('[name="check_report_1"]')[0].click();
document.querySelectorAll('[name="check_report_2"]')[0].click();
document.querySelectorAll('[name="check_report_3"]')[0].click();
document.querySelectorAll('[name="check_report_5"]')[0].click();
document.querySelectorAll('[name="check_report_6"]')[0].click();
document.querySelectorAll('[name="check_report_17"]')[0].click();

// select type pdf

document.querySelectorAll('[value="pdf"]')[0].click();

// document.querySelectorAll('[href="javascript:document.forms[0].submit()"]')[0].click();




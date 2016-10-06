// Your Code Here:
function fizzBuzz(n) {
  // Implement FizzBuzz
  if (n % 15 == 0) {
    return "FizzBuzz";
  } else if (n % 5 == 0) {
    return "Buzz";
  } else if (n % 3 == 0) {
    return "Fizz";
  } else {
    return n.toString();
  }
}

function generateDiv(fbNum) {
  const newDiv = $(document.createElement("div"));
  if (fbNum == "FizzBuzz" || fbNum == "Buzz" || fbNum == "Fizz") {
    const className = fbNum.toLowerCase();
    newDiv.addClass(className);
  }
  newDiv.append(
    `<h3>${fbNum}</h3>`
  );
  return newDiv;
}

function onSubmit(e) {
  e.preventDefault();
  $("#results").empty();
  const range = parseInt($("#fb-range").val());
  for (let i = 1; i <= range; i++) {
    const n = fizzBuzz(i);
    $("#results").append(generateDiv(n));
  }
}

// Any other functions your app requires
$("#fb-form").submit(onSubmit);

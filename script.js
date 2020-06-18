//coded with contributions from Adam Snyder and James Hardy

const body = document.querySelector('#main')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

const out = function (n, str = ''){
    let newP = document.createElement('p')
    newP.append('Kata ' + n + ': ' + str)
    body.append(newP)
}

let kata1 = []
let counter = 1
  while (counter <= 20) {
    kata1.push(counter)
    counter += 1
  }
  out(1,kata1.join(", "))

  let kata2 = []
  let counter2 = 2
  while (counter2 <= 20) {
    kata2.push(counter2)
    counter2 += 2
  }
  out(2, kata2.join(', '))

  let kata3 = []
  let counter3 = 1
  while (counter3 <= 20) {
    kata3.push(counter3)
    counter3 += 2
  }
  out(3, kata3.join(', '))

  let kata4 = []
  let counter4 = 5
  while (counter4 <= 100) {
    kata4.push(counter4)
    counter4 += 5
  }
  out(4, kata4.join(', '))

  let kata5 = []
  let counter5 = 1
  while (counter5 <= 10) {
    kata5.push(counter5*counter5)
    counter5 += 1
  }
  out(5, kata5.join(', '))

  let kata6 = []
  let counter6 = 20
  while (counter6 >= 1) {
    kata6.push(counter6)
    counter6 -= 1
  }
  out(6, kata6.join(', '))

  let kata7 = []
  let counter7 = 20
  while (counter7 >= 2) {
    kata7.push(counter7)
    counter7 -= 2
  }
  out(7, kata7.join(', '))

  let kata8 = []
  let counter8 = 19
  while (counter8 >= 1) {
    kata8.push(counter8)
    counter8 -= 2
  }
  out(8, kata8.join(', '))

  let kata9 = []
  let counter9 = 100
  while (counter9 >= 5) {
    kata9.push(counter9)
    counter9 -= 5
  }
  out(9, kata9.join(', '))

  let kata10 = []
  let counter10 = 10
  while (counter10 >= 1) {
    kata10.push(counter10*counter10)
    counter10 -= 1
  }
  out(10, kata10.join(', '))

//   11 Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
  out(11, sampleArray.join(', '))
//   12 Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
    let kata12 = []
    for (const element of sampleArray){
        if (element % 2 === 0){
            kata12.push(element)
        }
    }
    out(12, kata12.join(', '))
//   13 Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
    let kata13 = []
    for (const element of sampleArray){
        if (element % 2 !== 0){
            kata13.push(element)
        }
    }
    out(13, kata13.join(', '))
//   14 Display the square of each element in sampleArray. (219961, 570025, …, 222784)
    let kata14 = []
    for (const element of sampleArray){
            kata14.push(element * element)
    }
    out(14, kata14.join(', '))
//   15 Display the sum of all the numbers from 1 to 20.
    let kata15 = 0
    for (let i = 1; i <= 20; i++){
        kata15 += i
    }
    out(15, kata15)
//   16 Display the sum of all the elements in sampleArray.
    let kata16 = 0
    for (const element of sampleArray){
        kata16 += element
    }
    out(16, kata16)
//   17 Display the smallest element in sampleArray.
    let kata17 = 999999999
    for (const element of sampleArray){
        if (element < kata17){
            kata17 = element
        }
    }
    out(17, kata17)
//   18 Display the largest element in sampleArray.
    let kata18 = 0
    for (const element of sampleArray){
        if (element > kata18){
            kata18 = element
        }
    }
    out(18, kata18)

// Display 20 solid gray rectangles, each 20px high and 100px wide.
out(19)
for (let i = 0; i < 20; i++){
    let newD = document.createElement('div')
    newD.id = 'gray_square'
    newD.style.height = '20px'
    newD.style.width = '100px'
    newD.style.backgroundColor = 'gray'
    body.append(newD)
}
// Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
out(20)
let width20 = 0
for (let i = 5; i <= 100; i += 5){
    width20 = 100 + i
    let newD = document.createElement('div')
    newD.id = 'gray_square'
    newD.style.height = '20px'
    newD.style.width = width20 + 'px'
    newD.style.backgroundColor = 'gray'
    body.append(newD)
}
// Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
out(21)
for (const element of sampleArray){
    let newD = document.createElement('div')
    newD.id = 'gray_square'
    newD.style.height = '20px'
    newD.style.width = element + 'px'
    newD.style.backgroundColor = 'gray'
    body.append(newD)
}
// As in #21, but alternate colors so that every other rectangle is red.
out(22)
let toggle = 1
for (const element of sampleArray){
    let newD = document.createElement('div')
    newD.id = 'gray_square'
    newD.style.height = '20px'
    newD.style.width = element + 'px'
    if (toggle > 0){
        newD.style.backgroundColor = 'gray'} else {
        newD.style.backgroundColor = 'red'
    }
    body.append(newD)
    toggle = toggle * -1
}
// As in #21, but color the rectangles with even widths red.
out(23)
for (const element of sampleArray){
    let newD = document.createElement('div')
    newD.id = 'gray_square'
    newD.style.height = '20px'
    newD.style.width = element + 'px'
    if (element % 2){
        newD.style.backgroundColor = 'gray'} else {
        newD.style.backgroundColor = 'red'
    }
    body.append(newD)
}
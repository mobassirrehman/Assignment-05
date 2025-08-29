const totalHearts = document.getElementById('total-hearts');
const coinCountElement = document.getElementById('coin-count');
const copyCountElement = document.getElementById('copy-count');
const callHistoryContainer = document.getElementById('call-history-container');
const clearHistoryBtn = document.getElementById('clear-history-btn');

let heartCount = 0;
let coinCount = 100;
let copyCount = 2;

// Heart Button Functionality
const heartBtns = document.getElementsByClassName('heart-btn');

for (const btn of heartBtns) {
  btn.addEventListener('click', function () {
    const icon = btn.querySelector('i');

    if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid', 'text-red-500');
      icon.classList.remove('text-gray-400');

      heartCount++;
      totalHearts.innerText = heartCount;
    }
  });
}
// Call Button Functionality

const callBtns = document.getElementsByClassName('call-btn');

for (const btn of callBtns) {
    btn.addEventListener('click', function() {
        const serviceName = btn.getAttribute('data-service');
        const serviceNumber = btn.getAttribute('data-number');

        if (coinCount < 20) {
            alert('Sorry! You do not have enough coins. You need 20 coins to make a call.');
            return;
        }
        alert('Calling ' + serviceName + ' at ' + serviceNumber);

        coinCount = coinCount - 20;
        coinCountElement.innerText = coinCount;

        const historyItem = document.createElement('div');
        historyItem.className = 'flex justify-between items-center font-semibold bg-gray-50 rounded-sm pl-2 py-3';

        const timeString = new Date().toLocaleTimeString('en-US');

        historyItem.innerHTML = '<div><p class="font-medium text-sm">' + serviceName + 
    '</p><p class="text-xs text-gray-500">' + serviceNumber + 
    '</p></div><span class="text-xs text-gray-400">' + timeString + '</span>';

    callHistoryContainer.appendChild(historyItem);
    });
}

//Copy Button Functionality
const copyBtns = document.getElementsByClassName('copy-btn');

for (const btn of copyBtns) {
  btn.addEventListener('click', function() {
    const number = btn.getAttribute('data-number');
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(number);
      }else {
        const tempInput = document.createElement('input');
        tempInput.value = number;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

        alert('Number ' + number + ' copied to clipboard');
        copyCount++;
        copyCountElement.innerText = copyCount;
    });
}
clearHistoryBtn.addEventListener('click', function() {
    callHistoryContainer.innerHTML = '';
    alert('Call history cleared!');
});


totalHearts.innerText = heartCount;
coinCountElement.innerText = coinCount;
copyCountElement.innerText = copyCount;
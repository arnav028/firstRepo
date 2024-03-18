document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('input[type="text"]');
    const button = document.querySelector('button');
    const list = document.createElement('ul');

    button.addEventListener('click', function() {
        const task = input.value.trim();
        if (task !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            list.appendChild(listItem);
            input.value = '';
        }
    });

    document.body.appendChild(list);
});

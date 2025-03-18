document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const arrow = button.querySelector('.arrow');

    // Toggle the visibility of the dropdown content
    if (content.style.display === 'block') {
      content.style.display = 'none';
      arrow.classList.remove('rotate');
    } else {
      content.style.display = 'block';
      arrow.classList.add('rotate');
    }
  });
});
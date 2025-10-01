const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('change', function(e) {
    const section = e.target.value;
    
    if (section === 'about') {
        document.querySelector('[data-search="about me"]').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'education') {
        document.querySelector('[data-search="education pendidikan sekolah kuliah"]').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'achievements') {
        document.querySelector('[data-search="achievements prestasi artifex vr french balinese weapon scholarship"]').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'certification') {
        document.querySelector('[data-search="certification sertifikat java programming ukbi"]').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'contact') {
        document.querySelector('[data-search="get in touch contact kontak hubungi"]').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Reset dropdown setelah scroll
    setTimeout(() => {
        searchBar.value = '';
    }, 500);
});

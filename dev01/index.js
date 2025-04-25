document.addEventListener('DOMContentLoaded', function() {
    // Main Banner Image Rotation
    const bannerImages = [
        'images/banner1.jpg',
        'images/banner2.jpg',
        'images/banner3.jpg'
    ];
    
    const bannerTitles = [
        '최신 개봉작',
        '인기 영화',
        '곧 개봉 예정'
    ];
    
    const bannerDescriptions = [
        '지금 상영중인 최신 영화를 만나보세요.',
        '관객들의 사랑을 받은 인기 영화를 확인하세요.',
        '기대작 영화의 예매를 시작하세요.'
    ];
    
    const mainBanner = document.querySelector('.main-banner');
    const bannerTitle = document.querySelector('.banner-content h1');
    const bannerDescription = document.querySelector('.banner-content p');
    let currentBannerIndex = 0;
    
    // Initialize banner
    updateBanner();
    
    // Rotate banner every 5 seconds
    setInterval(rotateBanner, 5000);
    
    function rotateBanner() {
        currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
        updateBanner();
    }
    
    function updateBanner() {
        mainBanner.style.backgroundImage = `url(${bannerImages[currentBannerIndex]})`;
        
        // Add fade effect
        mainBanner.classList.add('fading');
        
        // Update content with fade effect
        setTimeout(() => {
            bannerTitle.textContent = bannerTitles[currentBannerIndex];
            bannerDescription.textContent = bannerDescriptions[currentBannerIndex];
            mainBanner.classList.remove('fading');
        }, 500);
    }
    
    // Mobile Menu Toggle
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<span></span><span></span><span></span>';
    document.querySelector('header').appendChild(mobileMenuButton);
    
    mobileMenuButton.addEventListener('click', function() {
        document.querySelector('.main-menu').classList.toggle('active');
    });
    
    // Movie Item Hover Effects
    const movieItems = document.querySelectorAll('.movie-item');
    
    movieItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.movie-info').style.display = 'block';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.movie-info').style.display = '';
        });
    });
    
    // Lazy Loading for Images
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.removeAttribute('data-src');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // Add smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add movie search functionality
    const searchForm = document.createElement('form');
    searchForm.className = 'search-form';
    searchForm.innerHTML = `
        <input type="text" placeholder="영화 검색">
        <button type="submit"><i class="search-icon">🔍</i></button>
    `;
    
    document.querySelector('header').appendChild(searchForm);
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = this.querySelector('input').value.trim();
        
        if (searchTerm) {
            alert(`"${searchTerm}" 검색 결과를 표시합니다.`);
            // In a real application, you would redirect to search results page
            // or fetch and display results dynamically
        }
    });
    
    // Add back-to-top button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initialize a simple movie rating system
    const movieRatings = document.querySelectorAll('.movie-info');
    
    movieRatings.forEach(info => {
        const ratingContainer = document.createElement('div');
        ratingContainer.className = 'rating';
        
        const rating = Math.floor(Math.random() * 5) + 1; // Random rating 1-5
        
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.className = i <= rating ? 'star filled' : 'star';
            star.innerHTML = '★';
            star.dataset.value = i;
            
            star.addEventListener('click', function() {
                const value = this.dataset.value;
                const stars = this.parentElement.querySelectorAll('.star');
                
                stars.forEach((s, index) => {
                    if (index < value) {
                        s.classList.add('filled');
                    } else {
                        s.classList.remove('filled');
                    }
                });
                
                alert(`영화 평점을 ${value}점으로 등록했습니다.`);
            });
            
            ratingContainer.appendChild(star);
        }
        
        info.appendChild(ratingContainer);
    });
});

// Add CSS for JavaScript features
const styleElement = document.createElement('style');
styleElement.textContent = `
    .main-banner {
        transition: opacity 0.5s;
    }
    
    .main-banner.fading {
        opacity: 0.7;
    }
    
    .mobile-menu-button {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
    }
    
    .mobile-menu-button span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #333;
        margin: 5px 0;
    }
    
    .search-form {
        display: flex;
        align-items: center;
    }
    
    .search-form input {
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 4px 0 0 4px;
    }
    
    .search-form button {
        background-color: #e50914;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
    }
    
    .back-to-top {
        display: none;
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background-color: #e50914;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        z-index: 99;
    }
    
    .rating {
        margin-top: 10px;
    }
    
    .star {
        cursor: pointer;
        color: #ddd;
    }
    
    .star.filled {
        color: gold;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-button {
            display: block;
        }
        
        .main-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #fff;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        }
        
        .main-menu.active {
            display: flex;
        }
    }
`;

document.head.appendChild(styleElement);
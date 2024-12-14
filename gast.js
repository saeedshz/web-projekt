
        // انتخاب عناصر فرم
        const userForm = document.getElementById('userForm');
        const omdomRow = document.getElementById('omdomRow');

        // رویداد ارسال فرم
        userForm.addEventListener('submit', function(event) {
            event.preventDefault(); // جلوگیری از ارسال فرم

            // گرفتن مقادیر ورودی‌ها
            const userName = document.getElementById('name').value;
            const imageInput = document.getElementById('image').files[0];

            if (userName && imageInput) {
                const reader = new FileReader();
                
                // پس از بارگذاری تصویر
                reader.onload = function(e) {
                    // ساخت یک بخش جدید برای نظر کاربر
                    const userDiv = document.createElement('div');
                    userDiv.classList.add('omdöm-col');

                    // بخش اطلاعات کاربر
                    const userInfo = `
                        <div class="user">
                            <img src="${e.target.result}" alt="عکس ${userName}">
                            <div class="user-info">
                                <h4>${userName}</h4>
                            </div>
                        </div>
                        <p>کاربر جدید با موفقیت اضافه شد.</p>
                    `;

                    // اضافه کردن محتوای HTML به div
                    userDiv.innerHTML = userInfo;

                    // اضافه کردن div به omdöm-row
                    omdomRow.appendChild(userDiv);

                    // پاک کردن فرم برای ورودی‌های جدید
                    userForm.reset();
                };

                // خواندن فایل تصویر
                reader.readAsDataURL(imageInput);
            } else {
                alert('لطفاً نام و عکس خود را وارد کنید.');
            }
        });
 
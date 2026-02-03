document.addEventListener('DOMContentLoaded', () => {
    const copyArea = document.getElementById('copy-sdt');
    const sdtValue = document.getElementById('sdt-value').innerText;
    const tooltip = document.getElementById('myTooltip');

    copyArea.addEventListener('click', () => {
        // Tạo một element tạm để copy
        const el = document.createElement('textarea');
        el.value = sdtValue;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        // Hiển thị thông báo đã copy
        tooltip.innerText = "Đã sao chép!";
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = "1";

        // Ẩn thông báo sau 2 giây
        setTimeout(() => {
            tooltip.style.visibility = "hidden";
            tooltip.style.opacity = "0";
            // Trả lại chữ ban đầu cho lần sau
            setTimeout(() => {
                tooltip.innerText = "Chạm để sao chép";
            }, 300);
        }, 2000);
    });
});
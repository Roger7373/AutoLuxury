AUTO LUXURY CAR ACCESSORIES — INVOICE V2.0 测试版
=================================================

这是独立的 AutoLuxury App，不涉及 Contractor Invoice App。

【强烈建议：先备份原来资料】
打开现用 V1 App → 设置 → 导出备份 JSON → 保存到 iPhone「文件」。

【安装更新】
1. 在 iPhone 的「文件」App 解压这个 ZIP。
2. GitHub → roger7373 / AutoLuxury → Code → Add file → Upload files。
3. 上传 ZIP 内的 index.html、manifest.json、sw.js、logo.jpg、logo-tight.jpg、header-car.jpg、footer-strip.jpg、icon-180.png、icon-192.png、icon-512.png；必须放在 GitHub 仓库的最外层（root），而不是子目录，也不要只上传 ZIP。
4. Commit changes。等 GitHub Pages 完成部署后，访问 https://roger7373.github.io/AutoLuxury/ 。
5. 如遇旧版缓存，先刷新并等待部署；不要删除 Safari 网站资料，也不要删除主屏幕旧 App。

【V2 新功能】
- 橙黑色汽车主题 A4 Invoice，黑色跑车标题及底部图案。
- BILL TO + VEHICLE DETAILS（车牌、车型、年份、备注）。
- 商品库包含 Part No. / SKU、Brand、分类、Unit、Unit Price。
- 自动计算金额；手动添加配件/人工，或选择已保存商品。
- 多页 Invoice；Subtotal、Discount、Total、Bank、Signature、Chop 只在最后一页。
- 继续使用 KEY=auto_luxury_invoice_v1，原则上保留旧 Invoice、客户、商品库；不会擅自把旧 Project/Site 当作车牌。

【本地测试结果】
- 新建 Invoice、保存、客户自动填入、商品库带入、30 项分页（3 页）、末页总金额都通过 Chromium 本地测试。
- PDF 导出使用在线加载的 html2canvas / jsPDF，首次使用需可联网；iPhone Safari 及主屏幕 App 仍须实机测试。
- 不同浏览器以及 Safari/主屏幕 App 的本地数据可能隔离；请先备份。

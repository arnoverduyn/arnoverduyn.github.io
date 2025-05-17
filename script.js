document.addEventListener("DOMContentLoaded", () => {
    console.log('Website loaded');
});

function openTab(evt, tabId) {
    console.log("openTab function called with tabId: " + tabId);
    
    // Hide all content
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    // Deactivate all buttons
    document.querySelectorAll('.tab-link').forEach(b => b.classList.remove('active'));

    // Check if the tabId exists
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
        // Show selected tab and activate button
        tabContent.classList.add('active');
        console.log(tabContent);
    } else {
        console.error(`Tab with id "${tabId}" not found.`);
    }
    
    evt.currentTarget.classList.add('active');
}

function openTab2(evt, tabId) {
    console.log("openTab function called with tabId: " + tabId);
    
    // Hide all content
    document.querySelectorAll('.tab-content2').forEach(c => c.classList.remove('active'));

    // Deactivate all buttons
    document.querySelectorAll('.tab-link2').forEach(b => b.classList.remove('active'));

    // Check if the tabId exists
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
        // Show selected tab and activate button
        tabContent.classList.add('active');
        console.log(tabContent);
    } else {
        console.error(`Tab with id "${tabId}" not found.`);
    }
    
    evt.currentTarget.classList.add('active');
}

function openTab3(evt, tabId) {
    console.log("openTab function called with tabId: " + tabId);
    
    // Hide all content
    document.querySelectorAll('.tab-content3').forEach(c => c.classList.remove('active'));

    // Deactivate all buttons
    document.querySelectorAll('.tab-link3').forEach(b => b.classList.remove('active'));

    // Check if the tabId exists
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
        // Show selected tab and activate button
        tabContent.classList.add('active');
        console.log(tabContent);
    } else {
        console.error(`Tab with id "${tabId}" not found.`);
    }
    
    evt.currentTarget.classList.add('active');
}


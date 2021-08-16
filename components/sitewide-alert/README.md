# Sitewide Alert

This module contains the styles and javascript required to create the sitewide alert in the following graphic:

<img src="https://raw.githubusercontent.com/cagov/design-system/main/components/statewide-header/img/statewide-header-screenshot.png" />


## Sample HTML

<samp>
```
<div class="cagov-alert cagov-stack full-bleed">
    <div class="container">
        <div class="alert-content">
            <button class="btn-close"><span class="sr-only">Dismiss</span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;"
                    xml:space="preserve">
                    <path d="M1.5,22.8c0.6,0.6,1.6,0.6,2.2,0l8.5-8.5l8.5,8.5c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.6,0-2.2l-8.5-8.5l8.5-8.5
	c0.6-0.6,0.6-1.6,0-2.2c-0.6-0.6-1.6-0.6-2.2,0L12.1,10L3.7,1.5c-0.6-0.6-1.6-0.6-2.2,0s-0.6,1.6,0,2.2l8.5,8.5l-8.5,8.5
	C0.9,21.2,0.9,22.2,1.5,22.8z" />
                </svg>
            </button>
            <h3 class="alert-title">Title of alert</h3>
            <p class="alert-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in enim nec nulla
                pulvinar posuere quis a mi.</p>
            <span class="button-white"><a href="#">Button link</a></span>
        </div>
    </div>
</div>
```
</samp>


### Expected variables

There are some colors that should be defined by the containing page. Here are the CSS variable names and their fallback values used when not defined:
 
- var(--primary-color, #064e66)
- var(--primary-dark-color, #4A1106)
- var(--secondary-color, #cf5d28)
- var(--white, #fff)
- var(--base, 8px)
- var(--p-sm, 16px)
- var(--pd-md, 24px)
- var(--w-lg, 1176px)
- var(--body-text, 1.125rem)
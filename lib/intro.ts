// Runs before paint (see app/layout.tsx) so returning visitors never see a flash of the overlay.
export const introBootScript = `try{var d=document.documentElement;if(sessionStorage.getItem("intro-seen")||matchMedia("(prefers-reduced-motion: reduce)").matches){d.dataset.intro="skip"}else{d.dataset.intro="play"}}catch(e){document.documentElement.dataset.intro="skip"}`;

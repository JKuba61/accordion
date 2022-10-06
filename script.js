const accordion = document.querySelector(`.accordion`)
const accordionBoxes = document.querySelectorAll(`.accordion-box`)
const accordionBtns = document.querySelectorAll(`.accordion-btn`)

function showAccordionInfo() {
	if (this.parentElement.classList.contains(`active`)) {
		this.parentElement.classList.remove(`active`)
	} else {
		accordionBoxes.forEach(box => {
			box.classList.remove(`active`)
		})
		this.parentElement.classList.add(`active`)
	}
}
const clickOutsideAccordion = e => {
	if (
		e.target.classList.contains(`accordion-btn`) ||
		e.target.classList.contains(`accordion-info`) ||
		e.target.classList.contains(`accordion-info-text`)
	)
		return
	accordionBoxes.forEach(box => {
		box.classList.remove(`active`)
	})
}

accordionBtns.forEach(btn => {
	btn.addEventListener(`click`, showAccordionInfo)
})
window.addEventListener(`click`, clickOutsideAccordion)

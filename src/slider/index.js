/*** 
 * slidesEL = the slides element
 * numberOfSlides =  the number of slides avialiable
 * moves = the number of move you want you slides to move at each point (this must be in % value)
 * transAnimation = css transAnimation animation values 
 * arrowNavPosition = the position of each arrrow navigation elements (e.g previous , next)
 * slideRight = specify the way the slider should slide (e.g slide left:, slide right)
 * arrowNavPrevious = the previous navigation element
 * arrowNavNext =  the next arrow navigation element
 * dotNavsposition = the position of each navigation elements corresponiding to it assigned slides (e.g first, second, third)
 * dotNavArr = the arrays elements of dots naviagtion
 * 
 * // Arrow navigation api function for sliders
 * Arrownavigation(slidesEl, numberOfSlides, moves, transAnimation, arrowNavPosition, arrowNavPrevious, arrowNavNext, dotNavElArr)
 * 
 * // Dots navigation api function for sliders
 * Dotnavavigation(slidesEl, dotNavsPosition, moves, transAnimation, dotNavElArr, numberOfSlides, arrowNavPrevious, arrowNavNext)
 * 
 * // Automation navigation api function slider, to be call inside a setinterval function
 * Autoplayslider(slidesEl, numberOfSlides, moves, transAnimation, slideRight, arrowNavPrevious, arrowNavNext, dotNavElArr)
 * 
*/
const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

const words = {
    "man": "person",
    "woman": "person",
    "father": "parent",
    "mother": "parent",
    "boy": "child",
    "girl": "child",
    "husband": "spouse",
    "wife": "spouse",
    "son": "child",
    "daughter": "child",
    "boyfriend": "partner",
    "girlfriend": "partner",
    "granddaughter": "grandchild",
    "grandson": "grandchild",
    "grandma": "grandparent",
    "grandpa": "grandparent",
    "sister": "sibling",
    "brother": "sibling",
    "businessman": "business person",
    "businesswoman": "business person",
    "chairman":	"chairperson",
    "chairwoman": "chairperson",
    "crewman": "crewperson",
    "foreman": "foreperson",
    "layman": "layperson",
    "mailman": "mail carrier",
    "manned": "crewed",
    "policeman": "police officer",
    "waiter": "server",
    "waitress": "server",
    "freshman":	"first-year student",
}

const keys = Object.keys(words)

for (let i=0; i < text.length; i++) {
    for (let j=0; j < keys.length; j++) {
        const re = new RegExp(`\\b${keys[j]}\\b`, 'gmi')
        if (text[i].innerHTML.match(re)) {
            console.log(text[i].innerHTML, keys[j])
            text[i].innerHTML = text[i].innerHTML.replaceAll(re, words[keys[j]])
            console.log('replaced')
        }
        
    }
}
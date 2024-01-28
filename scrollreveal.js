
window.sr = ScrollReveal({ reset: true });

// Sessão - Topo do site 
ScrollReveal().reveal('section.topoSite .txtTopoSite h1',{
    duration: 1000,
});
ScrollReveal().reveal('section.topoSite .txtTopoSite p',{
    duration: 1000,
    delay: 200
});
ScrollReveal().reveal('section.topoSite .imgTopoSite',{
    duration: 1000,
    delay: 300
});
ScrollReveal().reveal('section.topoSite .btnContato',{
    duration: 1000,
    delay: 400
});

// Sessão - Especialidades
ScrollReveal().reveal('section.especialidades h2', {
    duration: 1000,
});

ScrollReveal().reveal('section.especialidades #box1', {
    duration: 1000,
    delay: 200
});
ScrollReveal().reveal('section.especialidades #box2', {
    duration: 1000,
    delay: 300
});
ScrollReveal().reveal('section.especialidades #box3', {
    duration: 1000,
    delay: 400
});

// Sessão - Sobre 

ScrollReveal().reveal('section.sobre h2', {
    duration: 600,
});
ScrollReveal().reveal('section.sobre img ', {
    rotate: {x: 30,y: 30,z: 0},
    duration: 600,
    delay: 200
});
ScrollReveal().reveal('section.sobre p',{
    duration: 600,
    delay: 200
});
ScrollReveal().reveal('section.sobre .btnSocial',{
    duration: 600,
    delay: 200
});

// Sessão - Portfólio

ScrollReveal().reveal('section.portfolio h2', {
    duration: 600
});
ScrollReveal().reveal('section.portfolio h3', {
    duration: 600
});
ScrollReveal().reveal('section.portfolio #project1', {
    duration: 600,
    delay: 200
});
ScrollReveal().reveal('section.portfolio #project2', {
    duration: 600,
    delay: 300
});
ScrollReveal().reveal('section.portfolio #project3', {
    duration: 600,
    delay: 400
});
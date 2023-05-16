const projets = [
{id: 1, name: 'Travel Agency', description: "Mon premier site web créé en html et css. Un site où j'ai appris les bases et qui m'a donné la passion du développement web", url:'#', image: 'voyage.jpg', categorie_id: [1]},
{id: 2, name: 'Jeu du serpent', description: "Mon premier jeu jouable sur un navigateur. Totalement fait en javascript et basé sur le canvas, cette réalisation m'a offert de solides bases en javascript", url:'#', image: 'serpent.jpg', categorie_id: [1,2]},
{id: 3, name: 'Top 5 des meilleures actrices', description: "Ma première page intéractive basée sur Jquery, une page avec beaucoup d'animations", url:'#', image: 'actrices.jpg', categorie_id: [1,2,3]},
{id: 4, name: 'CV bootstrap', description: "Un site web relatant mon CV de développeur Web. Une page faite entièrement par le puissant framework Bootstrap", url:'#', image: 'cvbootstrap.jpg', categorie_id: [1,2,3,4]},
{id: 5, name: 'Burger code', description: "Une page intéractive relié à une base de donnée. Réalisé avec PHP et MySQL, elle m'a permis de maîtriser PHP", url:'#', image: 'burger.jpg', categorie_id: [1,4,5,6]},
{id: 6, name: 'Tanatos Studio', description: "Intégration d'une maquette sous WordPress avec le builder Elementor. C'est aussi mon premier site web sous ce CMS", url:'#', image: 'tanatos.jpg', categorie_id: [9]},
{id: 7, name: 'Afrodyta', description: "Une page en html et css simple mais totalement responsive. Implémentation de quelques codes javascript pour gérer le navbar", url:'#', image: 'afrodyta.jpg', categorie_id:[1,2]},
{id: 8, name: 'Construct Project', description: "Intégration d'une grosse maquette réalisée totalement en Bootstrap. Site mettant en valeur la puissance de Bootstrap", url:'#', image: 'construct.jpg', categorie_id: [1,4]},
{id: 9, name: 'PHP CRUD', description: "Les bases de PHP combinées avec le language SQL. Démonstration du CRUD en PHP avec un affichage basé sur Bootstrap", url:'#', image: 'crud.jpg', categorie_id:[1,4,5,6]},
{id: 10, name: 'PHP Recherche', description: "Un site permettant de voir la recherche combiné de PHP. Notion de PHP et SQL avancé mise ne pratique", url:'#', image: 'php_recherche.php', categorie_id:[1,4,5,6]},
{id: 11, name: 'Laravel blog', description: "Un blog utilisant Bootstrap pour le front-end mais géré totalement par Laravel en back-end. Il démontre la puissance générateur de template : blade", url:'#', image: 'laravel_blog', categorie_id: [1,2,4,5,7]},
{id: 12, name: 'Vue Js Project', description: "Un site totalement intéractive et fluid mettant en évidence la puissance du framework javascript Vue Js", url:'#', image: 'vuejs.jpg', categorie_id: [1,2,4,8]}

]

const categories = [
    {id: 1, name: 'HTML & CSS'},
    {id: 2, name: 'Javascript'},
    {id: 3, name: 'Jquery'},
    {id: 4, name: 'Bootstrap'},
    {id: 5, name: 'PHP'},
    {id: 6, name: 'SQL'},
    {id: 7, name: 'Laravel'},
    {id: 8, name: 'Vue Js'},
    {id: 9, name: 'WordPress'},
    {id: 10, name: 'SASS'},
    {id: 11, name: 'Tailwind CSS'},
    {id: 12, name: 'React Js'},
]
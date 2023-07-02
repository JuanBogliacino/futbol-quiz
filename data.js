import Mundial from './src/assets/mundial.png';
import Historia from './src/assets/historia.png';
import Literatura from './src/assets/literatura.png';
import Tecnologia from './src/assets/tecnología.png';


import PelotaSilbato from './src/assets/pelota-silbato.webp'
import MessiTriste from './src/assets/messi-triste.jpg'
import imgMessiFeliz from '/src/assets/messi_dos_pulgares_arriba.webp'
import Champions from './src/assets/champions league.png'
import Messi from './src/assets/messi.png';
import Argentina from './src/assets/argentina.png';


export const imgs = [
	PelotaSilbato,
	MessiTriste,
	imgMessiFeliz,
	Champions,
	Messi,
	Argentina,
	Mundial,
	Historia,
	Literatura,
	Tecnologia,
];

export const categories = {
	champions: 'Champions League',
	messi: 'Messi',
	argentina: 'Argentina',
	mundial: 'Mundial',
	historia: 'Historia', 
	literatura: 'Literatura',
	tecnologia: 'Tecnología',
};

const {
	champions,
	mundial,
	messi,
	historia,
	tecnologia,
	literatura,
	argentina,
} = categories;

export const questions = [
	// PREGUNTAS CHAMPIONS LEAGUE --------------------------------------------------------------------------------------------------------------
	{
		id: 4,
		difficulty: 'Medio',
		question:
			"¿Cuál fué el primer equipo Holandés en ganar la UEFA Champions League?",
		category: champions,
		correct_answer: 'Feyenoord',
		incorrect_answers: ['Ajax', 'PSV Eindhoven', 'AZ Alkmaar'],
	},
	{
		id: 10,
		difficulty: 'Medio',
		question: '¿Cuántas finales de la Champions perdió la Juventus?',
		category: champions,
		correct_answer: '7',
		incorrect_answers: [
			'5',
			'6',
			'3',
		],
	},
	{
		id: 12,
		difficulty: 'Medio',
		question: '¿Cuál fue la primera edición de la Copa de Europa en formato de UEFA Champions League?',
		category: champions,
		correct_answer:
			'1992/93',
		incorrect_answers: [
			'1988/89',
			'1993/94',
			'1998/99',
		],
	},
	{
		id: 14,
		difficulty: 'Fácil',
		question: 'Real Madrid y Bayern son los dos equipos que más partidos han disputado en el formato Champions League. ¿Quién es el tercero?',
		category: champions,
		correct_answer: 'Barcelona',
		incorrect_answers: ['Juventus', 'Milan', 'Manchester United'],
	},
	{
		id: 16,
		difficulty: 'Difícil',
		question:
			'La final de Estambul de 2005 es una de las más recordadas de la historia. ¿Recuerdas quién marcó el tercer gol del Liverpool que llevó el partido a la prórroga?',
		category: champions,
		correct_answer: 'Xabi Alonso',
		incorrect_answers: ['Steven Gerrard', 'Luis Garcíá', 'Vladimír Šmicer'],
	},
	{
		id: 21,
		difficulty: 'Fácil',
		question: '¿Qué jugador ha disputado más partidos en la historia de la Champions League?',
		category: champions,
		correct_answer: 'Cristiano Ronaldo',
		incorrect_answers: ['Iker Casillas', 'Paolo Maldini', 'Paco Gento'],
	},
	{
		id: 19,
		difficulty: 'Fácil',
		question: 'Cristiano Ronaldo y Messi lideran la lista de goleadores históricos de la competición. ¿Quién ocupa la tercera plaza?',
		category: champions,
		correct_answer: 'Lewandowski',
		incorrect_answers: [
			'Karim Benzema',
			'Raúl Gonzaléz',
			'Alfredo Di Stéfano',
		],
	},
	{
		id: 28,
		difficulty: 'Fácil',
		question: 'Sólo uno de estos históricos delanteros marcó en la Champions League para seis equipos diferentes. ¿Quién es?',
		category: champions,
		correct_answer: 'Zlatan Ibrahimović',
		incorrect_answers: ['Hernán Crespo', 'Olivier Giroud', 'Nicolas Anelka'],
	},
	{
		id: 24,
		difficulty: 'Difícil',
		question: '¿Cuál de estos jugadores ha marcado más goles en la Champions League?',
		category: champions,
		correct_answer: 'Andriy Shevchenko',
		incorrect_answers: ['Didier Drogba', 'Alessandro Del Piero', 'Filippo Inzaghi'],
	},
	{
		id: 80,
		difficulty: 'Medio',
		question: '¿Cuál de estos jugadores ha dado más asistencias?',
		category: champions,
		correct_answer: 'Ángel Di María',
		incorrect_answers: ['Andres Iniesta', 'Karim Benzema', 'Frank Ribéry'],
	},
	{
		id: 81,
		category: champions,
		difficulty: 'Difícil',
		question: '¿Quién de estos 4 entrenadores ha disputado más partidos en la historia de la Champions League?',
		correct_answer:
			'Alex Ferguson',
		incorrect_answers: [
			'José Mourinho',
			'Carlo Ancelotti',
			'Arsène Wenger',
		],
	},
	{
		id: 82,
		category: champions,
		difficulty: 'Difícil',
		question: '¿Cuál de estos equipos Alemanes ganó la Champions League?',
		correct_answer:
			'Hamburgo',
		incorrect_answers: [
			'Monchengladbach',
			'Frankfurt',
			'Bayer Leverkusen',
		],
	},
	// PREGUNTAS MESSI ---------------------------------------------------------------------------------------------------
	{
		id: 5,
		difficulty: 'Difícil',
		question:
			'¿A quién le hizo su primer gol en la UEFA Champions League?',
		category: messi,
		correct_answer: 'Panathinaikos',
		incorrect_answers: ['Shajtar Donetsk', 'Olympique de Lyon', 'Olympique de Marsella'],
	},
	{
		id: 18,
		difficulty: 'Medio',
		question:
			'¿Contra que equipo hizo su debut oficial con el Barcelona?',
		category: messi,
		correct_answer: 'Espanyol',
		incorrect_answers: ['Porto', 'Sevilla', 'Zaragoza'],
	},
	{
		id: 70,
		category: messi,
		difficulty: 'Fácil',
		question: '¿Contra que equipo hizo su primer gol con la selección argentina?',
		correct_answer: 'Croacia',
		incorrect_answers: ['Colombia', 'Serbia y Montenegro', 'Paraguay'],
	},
	{
		id: 71,
		category: messi,
		difficulty: 'Medio',
		question:
			'¿En que fecha hizo su primer gol?',
		correct_answer: '1 de mayo de 2005',
		incorrect_answers: [
			'12 de abril de 2005',
			'4 de marzo de 2004',
			'16 de octubre de 2004',
		],
	},
	{
		id: 72,
		category: messi,
		difficulty: 'Difícil',
		question: 'Messi tiene el récord de mas jornadas de ligas consecutivas anotando, ¿cuántas fueron?',
		correct_answer:
			'21',
		incorrect_answers: [
			'19',
			'23',
			'18',
		],
	},
	{
		id: 73,
		category: messi,
		difficulty: 'Medio',
		question: '¿Cuántos goles anotó con el PSG?',
		correct_answer: '32',
		incorrect_answers: [
			'38',
			'29',
			'35',
		],
	},
	{
		id: 74,
		category: messi,
		difficulty: 'Difícil',
		question:
			'¿Cuántas veces fué el maximo goleador de LaLiga?',
		correct_answer:
			'8',
		incorrect_answers: [
			'7',
			'6',
			'9',
		],
	},
	{
		id: 75,
		category: messi,
		difficulty: 'Fácil',
		question: '¿Cuál es el equipo al que mas goles le hizo?',
		correct_answer:
			'Sevilla',
		incorrect_answers: [
			'Valencia',
			'Atletico Madrid',
			'Real Madrid',
		],
	},
	{
		id: 76,
		category: messi,
		difficulty: 'Medio',
		question:
			'¿Contra que equipo hizo su ultimo gol jugando para el Barcelona?',
		correct_answer:
			'Celta de Vigo',
		incorrect_answers: [
			'Athletic Club',
			'Granada',
			'Real Sociedad',
		],
	},
	{
		id: 77,
		difficulty: 'Fácil',
		question: 'En el 2012 Messi romperia el récord de mas goles en un año anotando 91, ¿Cuantos de estos fueron con la Selección argentina?',
		category: messi,
		correct_answer: '12',
		incorrect_answers: ['13', '15', '14'],
	},
	{
		id: 78,
		difficulty: 'Medio',
		question:
			'¿Cuántos titulos ganó con el Barcelona?',
		category: messi,
		correct_answer: '35',
		incorrect_answers: ['33', '36', '34'],
	},
	{
		id: 79,
		difficulty: 'Difícil',
		question:
			'¿Cuál es el equipo al que mas goles le hizo en la UEFA Champions League?',
		category: messi,
		correct_answer: 'el mas grande de Londres',
		incorrect_answers: [
			'Manchester City',
			'Bayer Leverkusen',
			'Celtic',
		],
	},
	// PREGUNTAS ARGENTINA ------------------------------------------------------------------------------------------------------------------------
	{
		id: 7,
		difficulty: 'Fácil',
		question: '¿Cuántas veces Argentina se enfrentó con Nigeria en Mundiales?',
		category: argentina,
		correct_answer: '4',
		incorrect_answers: [
			'5',
			'2',
			'3',
		],
	},
	{
		id: 8,
		difficulty: 'Medio',
		question: 'Cuál fué el último mundial en el que no estuvo Argentina?',
		category: argentina,
		correct_answer: '1970',
		incorrect_answers: [
			'1958',
			'1950',
			'1966',
		],
	},
	{
		id: 17,
		difficulty: 'Medio',
		question: '¿Cómo terminó el partido en el que Argentina le gana a Perú en el mundial de 1978?',
		category: argentina,
		correct_answer: '6-0',
		incorrect_answers: ['3-0', '4-0', '5-0'],
	},
	{
		id: 26,
		difficulty: 'Difícil',
		question:
			'¿Contra quién jugó su primer partido Messi con la selección sub 20?',
		category: argentina,
		correct_answer: 'Paraguay',
		incorrect_answers: ['Chile', 'Uruguay', 'Perú'],
	},
	{
		id: 27,
		difficulty: 'Medio',
		question: '¿A qué selección elimina Argentina en los cuartos del mundial de Italia 90?',
		category: argentina,
		correct_answer: 'Yugoslavia',
		incorrect_answers: ['Rumania', 'Italia', 'Hungria'],
	},
	{
		id: 55,
		difficulty: 'Difícil',
		question: '¿Cuántos goles y asistencias hizo Maradona en el mundial de México 86?',
		category: argentina,
		correct_answer: '5 goles, 5 asistencias',
		incorrect_answers: [
			'4 goles, 6 asistencias',
			'6 goles, 4 asistencias',
			'4 goles, 5 asistencias',
		],
	},
	{
		id: 56,
		difficulty: 'Fácil',
		question: 'En el famoso gol del siglo contra Inglaterra en el mundial de México 86, ¿que jugador deja solo a maradona para que haga el gol?',
		category: argentina,
		correct_answer: 'Héctor Enrique',
		incorrect_answers: ['Jorge Burruchaga', 'Jorge Valdano', 'José Luis Cuciuffo'],
	},
	{
		id: 57,
		difficulty: 'Medio',
		question: '¿Cuántas veces ganó la Copa Confederaciones Argentina?',
		category: argentina,
		correct_answer: '1',
		incorrect_answers: ['2', '3', '4'],
	},
	{
		id: 58,
		difficulty: 'Medio',
		question: '¿Cuántos juegos olimpicos ganó Argentina?',
		category: argentina,
		correct_answer: '2',
		incorrect_answers: ['1', '3', '4'],
	},
	{
		id: 59,
		difficulty: 'Difícil',
		question: '¿Cuántas veces Argentina fué subcampeón de la Copa América?',
		category: argentina,
		correct_answer: '14',
		incorrect_answers: ['12', '9', '8'],
	},
	{
		id: 60,
		difficulty: 'Difícil',
		question: '¿Cuántos mundiales sub 20 ganó Argentina?',
		category: argentina,
		correct_answer: '6',
		incorrect_answers: ['5', '4', '3'],
	},
	{
		id: 61,
		difficulty: 'Medio',
		question: '¿Cuál es la selección a la que mas partidos le saca en el historial?',
		category: argentina,
		correct_answer: 'Chile',
		incorrect_answers: ['Uruguay', 'Perú', 'Colombia'],
	},
	// PREGUNTAS MUNDIAL ---------------------------------------------------------------------------------------------------
	{
		id: 1,
		difficulty: 'Fácil',
		question: '¿Qué evento inició la Primera Guerra Mundial?',
		category: historia,
		correct_answer:
			'correcta',
		incorrect_answers: [
			'asasvsavv',
			'asvasvvsasv',
			'asvasvasvvas',
		],
	},
	{
		id: 2,
		difficulty: 'Fácil',
		question: '¿Quién es el autor de "Cien años de soledad"?        ',
		category: literatura,
		correct_answer: 'Gabriel García Márquez',
		incorrect_answers: [
			'Julio Cortázar',
			'Mario Vargas Llosa',
			'Pablo Neruda',
		],
	},
	{
		id: 3,
		difficulty: 'Fácil',
		question: '¿En qué deporte se utiliza un disco?',
		category: mundial,
		correct_answer: 'Hockey sobre hielo',
		incorrect_answers: ['Fútbol', 'Baloncesto', 'Béisbol'],
	},
	{
		id: 6,
		difficulty: 'Medio',
		question: '¿En qué año fue fundada la compañía Apple?',
		category: tecnologia,
		correct_answer: '1976',
		incorrect_answers: ['1984', '1991', '1967'],
	},
	{
		id: 9,
		difficulty: 'Difícil',
		question: '¿Cuál es la obra más famosa de William Shakespeare?',
		category: literatura,
		correct_answer: 'Hamlet',
		incorrect_answers: ['Romeo y Julieta', 'Macbeth', 'El Rey Lear'],
	},
	{
		id: 11,
		difficulty: 'Fácil',
		question: '¿Qué país ganó el primer Mundial de Fútbol?',
		category: mundial,
		correct_answer: 'Uruguay',
		incorrect_answers: ['Brasil', 'Argentina', 'Alemania'],
	},
	{
		id: 13,
		difficulty: 'Medio',
		question:
			'¿En qué año se celebraron los primeros Juegos Olímpicos modernos?',
		category: mundial,
		correct_answer: '1896',
		incorrect_answers: ['1900', '1924', '1936'],
	},
	{
		id: 15,
		difficulty: 'Fácil',
		question: "¿Quién escribió la obra 'Don Quijote de la Mancha'?",
		category: literatura,
		correct_answer: 'Miguel de Cervantes',
		incorrect_answers: [
			'Federico García Lorca',
			'Gabriel García Márquez',
			'Pablo Neruda',
		],
	},
	{
		id: 20,
		difficulty: 'Fácil',
		question: '¿Quién es el autor de la novela "El viejo y el mar"?',
		category: literatura,
		correct_answer: 'Ernest Hemingway',
		incorrect_answers: [
			'William Shakespeare',
			'J.K. Rowling',
			'F. Scott Fitzgerald',
		],
	},
	{
		id: 22,
		difficulty: 'Medio',
		question: '¿Quién es el creador del sistema operativo Linux?',
		category: tecnologia,
		correct_answer: 'Linus Torvalds',
		incorrect_answers: [
			'Steve Jobs',
			'Bill Gates',
			'Mark Zuckerberg',
		],
	},
	{
		id: 23,
		difficulty: 'Medio',
		question: '¿En qué año terminó la Segunda Guerra Mundial?',
		category: historia,
		correct_answer: '1945',
		incorrect_answers: ['1939', '1941', '1943'],
	},
	{
		id: 25,
		difficulty: 'Medio',
		question:
			"¿Qué escritor es conocido por haber escrito 'Cien años de soledad'?",
		category: literatura,
		correct_answer: 'Gabriel García Márquez',
		incorrect_answers: [
			'Jorge Luis Borges',
			'Pablo Neruda',
			'Julio Cortázar',
		],
	},
	{
		id: 29,
		difficulty: 'Medio',
		question:
			'¿Qué jugador de fútbol ha ganado más Balones de Oro en la historia?',
		category: mundial,
		correct_answer: 'Lionel Messi',
		incorrect_answers: [
			'Cristiano Ronaldo',
			'Johan Cruyff',
			'Diego Maradona',
		],
	},
	{
		id: 30,
		difficulty: 'Fácil',
		question: '¿En qué año ocurrió la Revolución Francesa?',
		category: historia,
		correct_answer: '1789',
		incorrect_answers: ['1848', '1917', '1492'],
	},
	{
		id: 31,
		difficulty: 'Fácil',
		category: tecnologia,
		question: '¿Qué significa la sigla HTML?',
		correct_answer: 'HyperText Markup Language',
		incorrect_answers: [
			'Hyperlinks and Text Markup Language',
			'Home Tool Markup Language',
			'Hyperlinking Text Markup Language',
		],
	},
	{
		id: 32,
		difficulty: 'Fácil',
		category: tecnologia,
		question: '¿Cuál es el navegador web más utilizado en el mundo?',
		correct_answer: 'Google Chrome',
		incorrect_answers: ['Safari', 'Firefox', 'Internet Explorer'],
	},
	{
		id: 33,
		difficulty: 'Fácil',
		category: tecnologia,
		question:
			'¿Qué lenguaje de programación es más utilizado para el desarrollo web?',
		correct_answer: 'JavaScript',
		incorrect_answers: ['Python', 'Java', 'C++'],
	},
	{
		id: 34,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un servidor web?',
		correct_answer:
			'Un programa que recibe y procesa solicitudes HTTP',
		incorrect_answers: [
			'Un programa que envía correos electrónicos',
			'Un programa que protege la privacidad de los usuarios en línea',
			'Un programa que realiza operaciones matemáticas complejas',
		],
	},
	{
		id: 35,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un ataque de phishing?',
		correct_answer:
			'Un intento de obtener información confidencial a través de un correo electrónico falso',
		incorrect_answers: [
			'Un virus que daña los archivos del ordenador',
			'Un tipo de ataque DDoS',
			'Un intento de secuestrar el tráfico de internet',
		],
	},
	{
		id: 36,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un archivo CSV?',
		correct_answer:
			'Un archivo de texto con valores separados por comas',
		incorrect_answers: [
			'Un archivo de audio comprimido',
			'Un archivo de imagen en formato vectorial',
			'Un archivo de vídeo de alta definición',
		],
	},
	{
		id: 37,
		difficulty: 'Difícil',
		category: tecnologia,
		question: '¿Qué es un algoritmo de cifrado asimétrico?',
		correct_answer:
			'Un método de cifrado que utiliza dos claves diferentes',
		incorrect_answers: [
			'Un método de cifrado que utiliza la misma clave para cifrar y descifrar',
			'Un método de cifrado que no utiliza claves',
			'Un método de cifrado que solo se utiliza en aplicaciones militares',
		],
	},
	{
		id: 38,
		difficulty: 'Difícil',
		category: tecnologia,
		question: '¿Qué es una red privada virtual (VPN)?',
		correct_answer:
			'Una conexión segura a una red privada a través de internet',
		incorrect_answers: [
			'Una red de computadoras en una organización',
			'Una red de computadoras conectadas a internet',
			'Una red de computadoras que solo utiliza tecnología inalámbrica',
		],
	},
	{
		id: 39,
		difficulty: 'Difícil',
		question: '¿En qué año se produjo la Guerra de los Cien Años?',
		category: historia,
		correct_answer: '1337',
		incorrect_answers: ['1066', '1415', '1642'],
	},
	{
		id: 40,
		difficulty: 'Fácil',
		question: '¿En qué año se produjo el ataque a Pearl Harbor?',
		category: historia,
		correct_answer: '1941',
		incorrect_answers: ['1939', '1942', '1945'],
	},
	{
		id: 41,
		difficulty: 'Medio',
		question: '¿Qué tratado dio fin a la Primera Guerra Mundial?',
		category: historia,
		correct_answer: 'Tratado de Versalles',
		incorrect_answers: [
			'Tratado de Tordesillas',
			'Tratado de Westfalia',
			'Tratado de Nankín',
		],
	},
	{
		id: 42,
		difficulty: 'Difícil',
		question:
			'¿Quién fue el último emperador de la Dinastía Qing en China?',
		category: historia,
		correct_answer: 'Puyi',
		incorrect_answers: ['Hongwu', 'Wuzong', 'Kangxi'],
	},
	{
		id: 43,
		difficulty: 'Fácil',
		question:
			'¿Cuál fue el nombre de la primera expedición de Cristóbal Colón?',
		category: historia,
		correct_answer: 'La Santa María',
		incorrect_answers: [
			'La Pinta',
			'La Niña',
			'La Santísima Trinidad',
		],
	},
	{
		id: 44,
		difficulty: 'Medio',
		question:
			'¿Cuál fue el primer país en enviar un objeto hecho por el hombre a la luna?',
		category: historia,
		correct_answer: 'Estados Unidos',
		incorrect_answers: ['Unión Soviética', 'China', 'Japón'],
	},
	{
		id: 45,
		difficulty: 'Difícil',
		question:
			'¿Cuál fue la primera ciudad en el mundo en tener una población de más de un millón de habitantes?',
		category: historia,
		correct_answer: 'Roma',
		incorrect_answers: ['Atenas', 'Babilonia', 'Nínive'],
	},
	{
		id: 46,
		difficulty: 'Fácil',
		question:
			'¿Quién fue el primer presidente de los Estados Unidos?',
		category: historia,
		correct_answer: 'George Washington',
		incorrect_answers: [
			'Thomas Jefferson',
			'Abraham Lincoln',
			'Franklin D. Roosevelt',
		],
	},
	{
		id: 47,
		difficulty: 'Medio',
		question: '¿Cuál fue la primera dinastía en gobernar en China?',
		category: historia,
		correct_answer: 'Xia',
		incorrect_answers: ['Han', 'Tang', 'Song'],
	},
	{
		id: 48,
		difficulty: 'Fácil',
		question: '¿Quién escribió la obra "Don Quijote de la Mancha"?',
		category: literatura,
		correct_answer: 'Miguel de Cervantes',
		incorrect_answers: [
			'Gabriel García Márquez',
			'Jorge Luis Borges',
			'Pablo Neruda',
		],
	},
	{
		id: 49,
		difficulty: 'Medio',
		question:
			'¿Cuál de las siguientes novelas es escrita por Gabriel García Márquez?',
		category: literatura,
		correct_answer: 'Cien años de soledad',
		incorrect_answers: [
			'Rayuela',
			'La ciudad y los perros',
			'La casa de los espíritus',
		],
	},
	{
		id: 50,
		difficulty: 'Difícil',
		question: '¿Quién escribió "La metamorfosis"?',
		category: literatura,
		correct_answer: 'Franz Kafka',
		incorrect_answers: [
			'Virginia Woolf',
			'James Joyce',
			'F. Scott Fitzgerald',
		],
	},
	{
		id: 51,
		difficulty: 'Fácil',
		question: '¿Quién escribió "El retrato de Dorian Gray"?',
		category: literatura,
		correct_answer: 'Oscar Wilde',
		incorrect_answers: [
			'Edgar Allan Poe',
			'Emily Bronte',
			'Charles Dickens',
		],
	},
	{
		id: 52,
		difficulty: 'Medio',
		question:
			'¿Cuál de las siguientes obras no fue escrita por William Shakespeare?',
		category: literatura,
		correct_answer: 'Moby Dick',
		incorrect_answers: ['Hamlet', 'Macbeth', 'Otelo'],
	},
	{
		id: 53,
		difficulty: 'Difícil',
		question:
			'¿Cuál de las siguientes obras de José Saramago recibió el Premio Nobel de Literatura?',
		category: literatura,
		correct_answer: 'Ensayo sobre la ceguera',
		incorrect_answers: [
			'La caverna',
			'El evangelio según Jesucristo',
			'Las intermitencias de la muerte',
		],
	},
	{
		id: 54,
		difficulty: 'Fácil',
		question:
			'¿Quién escribió la novela "El guardián entre el centeno"?',
		category: literatura,
		correct_answer: 'J.D. Salinger',
		incorrect_answers: [
			'F. Scott Fitzgerald',
			'Ernest Hemingway',
			'Tennessee Williams',
		],
	},
	{
		id: 62,
		difficulty: 'Fácil',
		question: '¿Qué país ganó la Copa Mundial de la FIFA en 2018?',
		category: mundial,
		correct_answer: 'Francia',
		incorrect_answers: ['Alemania', 'Brasil', 'Argentina'],
	},
	{
		id: 63,
		difficulty: 'Fácil',
		question: '¿Qué deporte se juega en Wimbledon?',
		category: mundial,
		correct_answer: 'Tenis',
		incorrect_answers: ['Golf', 'Fútbol', 'Rugby'],
	},
	{
		id: 64,
		difficulty: 'Medio',
		question:
			'¿Cuántos puntos vale un touchdown en el fútbol americano?',
		category: mundial,
		correct_answer: '6',
		incorrect_answers: ['4', '7', '5'],
	},
	{
		id: 65,
		difficulty: 'Medio',
		question:
			'¿Cuál es el jugador de baloncesto con más anillos de campeonato en la NBA?',
		category: mundial,
		correct_answer: 'Bill Russell',
		incorrect_answers: [
			'Michael Jordan',
			'Kareem Abdul-Jabbar',
			'LeBron James',
		],
	},
	{
		id: 66,
		difficulty: 'Medio',
		question:
			'¿Cuál es el país de origen del futbolista Lionel Messi?',
		category: mundial,
		correct_answer: 'Argentina',
		incorrect_answers: ['Brasil', 'España', 'Portugal'],
	},
	{
		id: 67,
		difficulty: 'Difícil',
		question:
			'¿En qué año se celebraron los Juegos Olímpicos de Beijing?',
		category: mundial,
		correct_answer: '2008',
		incorrect_answers: ['2012', '2004', '2016'],
	},
	{
		id: 68,
		difficulty: 'Difícil',
		question:
			'¿Quién es el máximo goleador en la historia de la Liga Española?',
		category: mundial,
		correct_answer: 'Lionel Messi',
		incorrect_answers: [
			'Cristiano Ronaldo',
			'Telmo Zarra',
			'Hugo Sánchez',
		],
	},
	{
		id: 69,
		difficulty: 'Difícil',
		question: '¿En qué deporte se utiliza el término "smash"?',
		category: mundial,
		correct_answer: 'Bádminton',
		incorrect_answers: ['Voleibol', 'Tenis', 'Squash'],
	},
	{
		id: 83,
		difficulty: 'Fácil',
		question: '¿Qué es el acrónimo "CPU" en inglés?',
		category: tecnologia,
		correct_answer: 'Central Processing Unit',
		incorrect_answers: [
			'Computer Personal Unit',
			'Central Personal Unit',
			'Computer Processing Unit',
		],
	},
	{
		id: 84,
		difficulty: 'Medio',
		question:
			'¿Cuál es el nombre de la primera computadora electrónica digital?',
		category: tecnologia,
		correct_answer: 'ENIAC',
		incorrect_answers: ['UNIVAC', 'COLOSSUS', 'EDSAC'],
	},
];
/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask cat Geek for a cat fact"
 *  Alexa: "Here's your cat fact: ..."
 */

/**
 * App ID for the skill
 */
var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * Array containing cat facts.
 */
var FACTS = [
"Neutering a cat extends its life span by two or three years.",
"A cat that bites you for rubbing his stomach is often biting from pleasure, not anger.",
"Of all the species of cats, the domestic cat is the only species able to hold its tail vertically while walking. All species of wild cats hold their tail horizontally or tucked between their legs while walking.",
"A cat can spend five or more hours a day grooming himself.",
"The cat appears to be the only domestic companion animal not mentioned in the Bible.",
"The Maine Coon is 4 to 5 times larger than the Singapura, the smallest breed of cat.",
"Tests done by the Behavioral Department of the Musuem of Natural History conclude that while a dog's memory lasts about 5 minutes, a cat's recall can last as long as 16 hours.",
"Purring does not always indicate that a cat is happy and healthy - some cats will purr loudly when they are terrified or in pain.",
"Cats must have fat in their diet because they can't produce it on their own.",
"Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible.",
"Cats can be prone to fleas in the summertime: 794 fleas were counted on one cat by a Cats Protection volunteer in the summer of 1 992.",
"There is a species of cat smaller than the average housecat. It is native to Africa and it is the Black-footed cat (Felis nigripes). Its top weight is 5.5 pounds.",
"Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible.",
"In just 7 years, one un-spayed female cat and one un-neutered male cat and their offspring can result in 420,000 kittens.",
"Cats can be right-pawed or left-pawed.",
"The oldest cat on record was probably \"Puss\", a tabby owned by Mrs. Holway of Clayhidon, Devon. Having celebrated his 36th birthday on November 28, 1939, Puss died the following day.",
"Normal body temperature for a cat is 102 degrees F.",
"In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.",
"Most cats killed on the road are un-neutered toms, as they are more likely to roam further afield and cross busy roads.",
"All cats have three sets of long hairs that are sensitive to pressure - whiskers, eyebrows,and the hairs between their paw pads.",
"Cats are now Britain's favourite pet: there are 7.7 million cats as opposed to 6.6 million dogs.",
"Cats lose almost as much fluid in the saliva while grooming themselves as they do through urination.",
"Why do people have cats? One survey that looked into the reasons people have cats found the following: companionship\/comfort 27%, stress\/blood pressure relief --22%, something to love\/feel needed\u00e2\u0080\u0094 9%, lifts depression\/boosts moods 10%, subject of communication\/stimulates interest 8%.",
"In 1987 cats overtook dogs as the number one pet in America.",
"While many cats enjoy milk, it will give some cats diarrhea.",
"A cat's normal temperature varies around 101 degrees Fahrenheit.",
"Florence Nightingale owned more than 60 cats in her lifetime.",
"Fossil records from two million years ago show evidence of jaguars.",
"Studies now show that the allergen in cats is related to their scent glands. Cats have scent glands on their faces and at the base of their tails. Entire male cats generate the most scent. If this secretion from the scent glands is the allergen, allergic people should tolerate spayed female cats the best.",
"Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. I n the cat family, only cheetahs cannot retract their claws.",
"Cats sleep 16 to 18 hours per day. When cats are asleep, they are still alert to incoming stimuli. If you poke the tail of a sleeping cat, it will respond accordingly.",
"Female cats are \"polyestrous,\" which means they may have many heat periods over the course of a year. A heat period lasts about 4 to 7 days if the female is bred; if she is not, the heat period lasts longer and recurs at regular intervals.",
"Recent studies have shown that cats can see blue and green. There is disagreement as to whether they can see red.",
"A cat has a total of 24 whiskers, 4 rows of whiskers on each side. The upper two rows can move independently of the bottom two rows.",
"A cat's normal pulse is 140-240 beats per minute, with an average of 195.",
"A cat's tongue has tiny barbs on it.",
"A cat will tremble or shiver when it is in extreme pain.",
"A steady diet of dog food may cause blindness in your cat - it lacks taurine.",
"A cat uses its whiskers for measuring distances.  The whiskers of a cat are capable of registering very small changes in air pressure.",
"The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.",
"The word \"cat\" in various languages: French: chat; German: katze; Italian: gatto; Spanish\/Portugese: gato; Yiddish: kats; Maltese: qattus; Swedish\/Norwegian: katt; Dutch: kat; Icelandic: kottur; Greek: catta; Hindu: katas; Japanese:neko; Polish: kot; Ukranian: kotuk; Hawiian: popoki; Russian: koshka; Latin: cattus; Egyptian: mau; Turkish: kedi; Armenian: Gatz; Chinese: mio; Arabic: biss; Indonesian: qitta; Bulgarian: kotka; Malay: kucing; Thai\/Vietnamese: meo; Romanian: pisica; Lithuanian: katinas; Czech: kocka; Slovak: macka; Armenian: gatz; Basque: catua; Estonian: kass; Finnish: kissa; Swahili: paka.",
"Cats eat grass to aid their digestion and to help them get rid of any fur in their stomachs.",
"Tomcats can mate at anytime, while quenns can only mate during a period of time called heat or estrus.",
"A female Amur leopard gives birth to one to four cubs in each litter.",
"In one stride, a cheetah can cover 23 to 26 feet (7 to 8 meters).",
"Contrary to popular belief, the cat is a social animal. A pet cat will respond and answer to speech , and seems to enjoy human companionship.",
"Phoenician cargo ships are thought to have brought the first domesticated cats to Europe in about 900 BC.",
"Mature cats with no health problems are in deep sleep 15 percent of their lives. They are in light sleep 50 percent of the time. That leaves just 35 percent awake time, or roughly 6-8 hours a day.",
"People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.",
"The average cat food meal is the equivalent to about five mice."];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * catGeek is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var Fact = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Fact.prototype = Object.create(AlexaSkill.prototype);
Fact.prototype.constructor = Fact;

Fact.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Fact.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Fact.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Fact.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewFactRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say tell me a cat fact, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    // Get a random cat fact from the cat facts list
    var factIndex = Math.floor(Math.random() * FACTS.length);
    var randomFact = FACTS[factIndex];

    // Create speech output
    var speechOutput = "Here's your fact: " + randomFact;
    var cardTitle = "Your Fact";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the catGeek skill.
    var fact = new Fact();
    fact.execute(event, context);
};

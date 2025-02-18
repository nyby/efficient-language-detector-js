# Efficient Language Detector

<div align="center">
	
![supported Javascript versions](https://img.shields.io/badge/JS-%3E%3D%20ES2015-blue)
![supported Javascript versions](https://img.shields.io/badge/Node.js-%3E%3D%2016-blue)
[![license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![supported languages](https://img.shields.io/badge/supported%20languages-60-brightgreen.svg)](#languages)
	
</div>

Efficient language detector (*Nito-ELD* or *ELD*) is a fast and accurate language detector, is one of the fastest non compiled detectors, while its accuracy is within the range of the heaviest and slowest detectors.

It's 100% Javascript (vanilla), easy installation and no dependencies.  
ELD is also available in [Python](https://github.com/nitotm/efficient-language-detector-py) and [PHP](https://github.com/nitotm/efficient-language-detector).

1. [Install](#install)
2. [How to use](#how-to-use)
3. [Languages](#languages)

## Install

- For *Node.js*
```bash
$ npm install @nyby/eld
```
## How to use?

### Load ELD

```javascript
import {eld} from '@nyby/eld';
```
### Usage

`detect()` expects a UTF-8 string, and returns an object, with a 'language' variable, with a ISO 639-1 code or empty string
```javascript
console.log( eld.detect('Hola, cómo te llamas?') )
// { language: 'es', getScores(): {'es': 0.5, 'et': 0.2}, isReliable(): true }
// returns { language: string, getScores(): Object, isReliable(): boolean } 

console.log( eld.detect('Hola, cómo te llamas?').language )
// 'es'
```

- Also, we can get the current status of eld: languages, database type
```javascript
  console.log( eld.info() )
```

## Languages

These are the *ISO 639-1 codes* of the 60 supported languages for *Nito-ELD* v1

> 'am', 'ar', 'az', 'be', 'bg', 'bn', 'ca', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'eu', 'fa', 'fi', 'fr', 'gu', 'he', 'hi', 'hr', 'hu', 'hy', 'is', 'it', 'ja', 'ka', 'kn', 'ko', 'ku', 'lo', 'lt', 'lv', 'ml', 'mr', 'ms', 'nl', 'no', 'or', 'pa', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sq', 'sr', 'sv', 'ta', 'te', 'th', 'tl', 'tr', 'uk', 'ur', 'vi', 'yo', 'zh'


Full name languages:

> Amharic, Arabic, Azerbaijani (Latin), Belarusian, Bulgarian, Bengali, Catalan, Czech, Danish, German, Greek, English, Spanish, Estonian, Basque, Persian, Finnish, French, Gujarati, Hebrew, Hindi, Croatian, Hungarian, Armenian, Icelandic, Italian, Japanese, Georgian, Kannada, Korean, Kurdish (Arabic), Lao, Lithuanian, Latvian, Malayalam, Marathi, Malay (Latin), Dutch, Norwegian, Oriya, Punjabi, Polish, Portuguese, Romanian, Russian, Slovak, Slovene, Albanian, Serbian (Cyrillic), Swedish, Tamil, Telugu, Thai, Tagalog, Turkish, Ukrainian, Urdu, Vietnamese, Yoruba, Chinese

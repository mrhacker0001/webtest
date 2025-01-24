import React from 'react'
import './Categories.css'
import reading from './assets/reading.jpeg'
import listening from './assets/listening.jpeg'
import writing from './assets/writing.jpeg'
import mockexam from './assets/mockexam.jpeg'
import vocabulary from './assets/speaking.jpeg'
import grammar from './assets/grammar.jpeg'

function Categories() {
    const data = [
        { img: reading, title: "Reading Tests", description: "Want to enhance your reading abilities? Practice with our reading exercises. We offer tests for A1, A2, B1, B1+, and B2 levels. You'll encounter various kinds of passages, and each test includes a range of question formats.", btn: "Go to the tests" },
        { img: listening, title: "Listening Tests", description: "Boost your listening abilities by working on our video exercises.We provide tests for all levels: A1, A2, B1, B1+, and B2.After submitting your answers, you'll have access to the audio transcript.", btn: "Go to the tests" },
        { img: mockexam, title: "Mock Tests", description: "Enhance your exam techniques and attain higher scores with our practice resources.Test - English supports you in preparing for MULTILEVEL, IELTS, or TOEFL iBT exams.", btn: "Go to the tests" },
        { img: grammar, title: "Grammar Lessons", description: "Learn the grammar topics commonly covered at each level: A1, A2, B1, B1+, and B2.Each lesson includes three or more exercises, detailed explanations, and personalized feedback for every question!", btn: "Go to the lessons" },
        { img: vocabulary, title: "Vocabulary Lessons", description: "Expand your vocabulary with exercises designed for each level: A1, A2, B1, B1+, and B2. Each lesson includes essential words, definitions, images, and quizzes with customized feedback to support your learning journey.", btn: "Go to the lessons" },
        { img: writing, title: "Writing Lessons", description: "Enhance your writing skills with the exercises provided in each lesson.Explore various types of texts tailored to your level: A1, A2, B1, B1+, or B2.Learn to structure and link ideas effectively in your compositions.", btn: "Go to the lessons" }


    ]
    return (
        <div className='Categories'>

        </div>
    )
}

export default Categories
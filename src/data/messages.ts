// src/data/messages.ts

export interface Message {
  id: string;
  sender: string;
  preview: string;
  body: string;
  time: string;
  read: boolean;
}

export interface Directory {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  messages: Message[];
}

export const directories: Directory[] = [
  {
    id: '1',
    name: 'You',
    icon: '👤',
    color: '#FF6B35',
    bgColor: '#FF6B35',
    messages: [
      {
        id: 'm1',
        sender: 'You',
        preview: 'Remember to take your medication...',
        body: 'Remember to take your medication today. Also, don\'t forget the gym session at 6 PM. You\'ve been doing great this week, keep it up!',
        time: '9:00 AM',
        read: false,
      },
      {
        id: 'm2',
        sender: 'You',
        preview: 'Goals for this month...',
        body: 'Goals for this month:\n1. Finish the React Native project\n2. Read 2 books\n3. Exercise at least 4 times per week\n4. Save $500',
        time: 'Yesterday',
        read: true,
      },
      {
        id: 'm3',
        sender: 'You',
        preview: 'Grocery list reminder',
        body: 'Grocery list:\n- Milk\n- Eggs\n- Bread\n- Chicken\n- Vegetables\n- Coffee\n- Yogurt',
        time: 'Mon',
        read: true,
      },
    ],
  },
  {
    id: '2',
    name: 'Home',
    icon: '🏠',
    color: '#4ECDC4',
    bgColor: '#4ECDC4',
    messages: [
      {
        id: 'm4',
        sender: 'Mom',
        preview: 'Dinner is ready at 7 PM tonight!',
        body: 'Dinner is ready at 7 PM tonight! I made your favourite pasta. Please don\'t be late, your dad and sister are coming too. See you soon! ❤️',
        time: '10:30 AM',
        read: false,
      },
      {
        id: 'm5',
        sender: 'Dad',
        preview: 'Can you fix the garage door this weekend?',
        body: 'Hey, can you fix the garage door this weekend? It\'s been making a weird noise lately. Also, the lawn needs mowing. Let me know if you need any tools.',
        time: 'Yesterday',
        read: true,
      },
      {
        id: 'm6',
        sender: 'Landlord',
        preview: 'Rent due on the 1st',
        body: 'Just a reminder that rent is due on the 1st of next month. Please make sure to transfer on time to avoid any late fees. Thank you!',
        time: 'Sun',
        read: true,
      },
    ],
  },
  {
    id: '3',
    name: 'Love',
    icon: '❤️',
    color: '#E63946',
    bgColor: '#E63946',
    messages: [
      {
        id: 'm7',
        sender: 'Alex',
        preview: 'Good morning! Thinking of you 😊',
        body: 'Good morning! Thinking of you 😊 Can\'t wait to see you this weekend. I have a surprise planned for us. Wear something nice!',
        time: '8:15 AM',
        read: false,
      },
      {
        id: 'm8',
        sender: 'Alex',
        preview: 'Movie tonight? Your pick 🎬',
        body: 'Movie tonight? Your pick 🎬 I\'ll bring the popcorn and snacks. Let me know what time works for you and I\'ll head over!',
        time: 'Yesterday',
        read: false,
      },
      {
        id: 'm9',
        sender: 'Alex',
        preview: 'Thanks for the wonderful dinner last night',
        body: 'Thanks for the wonderful dinner last night ✨ You\'re such an amazing cook. I had such a great time. Miss you already!',
        time: 'Sat',
        read: true,
      },
    ],
  },
  {
    id: '4',
    name: 'Family',
    icon: '👨‍👩‍👧‍👦',
    color: '#7B2D8B',
    bgColor: '#7B2D8B',
    messages: [
      {
        id: 'm10',
        sender: 'Sister',
        preview: 'Family reunion is next Saturday!',
        body: 'Family reunion is next Saturday! Grandma\'s place at noon. Please bring your famous potato salad and don\'t be late! Everyone is excited to see you 🎉',
        time: '11:00 AM',
        read: false,
      },
      {
        id: 'm11',
        sender: 'Brother',
        preview: 'Can I borrow $50 until payday?',
        body: 'Can I borrow $50 until payday? I\'ll pay you back by Friday, promise. Just need it for groceries this week. Thanks man!',
        time: 'Yesterday',
        read: true,
      },
      {
        id: 'm12',
        sender: 'Grandma',
        preview: 'Happy birthday dear! 🎂',
        body: 'Happy birthday dear! 🎂 Wishing you all the happiness in the world. I made your favourite cake. Come visit soon, I miss you so much! Love, Grandma',
        time: 'Fri',
        read: true,
      },
    ],
  },
  {
    id: '5',
    name: 'Friends',
    icon: '👫',
    color: '#FF69B4',
    bgColor: '#FF69B4',
    messages: [
      {
        id: 'm13',
        sender: 'Mike',
        preview: 'Game night Friday? Bring snacks 🎮',
        body: 'Game night Friday? Bring snacks 🎮 We\'re thinking Mario Kart and Among Us. Sam and Jordan are in. Should be a blast! Starting at 8 PM my place.',
        time: '2:00 PM',
        read: false,
      },
      {
        id: 'm14',
        sender: 'Sarah',
        preview: 'Did you see that new coffee shop downtown?',
        body: 'Did you see that new coffee shop downtown? It has amazing reviews! We should check it out this weekend. They have oat milk lattes 😍 Let me know!',
        time: 'Yesterday',
        read: false,
      },
      {
        id: 'm15',
        sender: 'Group Chat',
        preview: 'Who\'s up for hiking Sunday morning?',
        body: 'Who\'s up for hiking Sunday morning? Trail at Centennial Park, meeting at 7 AM. The weather looks perfect! Bring water and comfortable shoes. 🥾',
        time: 'Wed',
        read: true,
      },
    ],
  },
  {
    id: '6',
    name: 'School',
    icon: '🎓',
    color: '#06B6D4',
    bgColor: '#06B6D4',
    messages: [
      {
        id: 'm16',
        sender: 'Prof. Mohammed',
        preview: 'Assignment 3 due this Friday',
        body: 'Reminder: Assignment 3 (React Native Message Directory) is due this Friday at 11:59 PM. Please submit via D2L. Make sure to include your README.pdf and GitHub link. Good luck!',
        time: '9:45 AM',
        read: false,
      },
      {
        id: 'm17',
        sender: 'Study Group',
        preview: 'Meeting in library at 3 PM today',
        body: 'Meeting in library at 3 PM today to go over the mobile programming assignment. We\'re at table 5 near the computers. Bring your laptop!',
        time: '8:00 AM',
        read: true,
      },
      {
        id: 'm18',
        sender: 'University',
        preview: 'Your transcript is ready for download',
        body: 'Your official transcript is now ready for download from the student portal. Please log in to my.lakeheadu.ca to access your documents. Contact registrar@lakeheadu.ca for questions.',
        time: 'Tue',
        read: true,
      },
    ],
  },
];

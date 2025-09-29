Summary: React Tabbed Interface
This project was built to learn React’s rendering, component lifecycle, and state management, focusing on how React’s diffing algorithm affects state persistence. It features a tabbed interface with five tabs (Inbox, Snoozed, Sent, All Mail, Trash). Clicking a tab updates the active tab’s state via a handleActiveTab function, highlighting the selected tab in blue. Tabs 1–4 display content from an array in the TabContent component, which includes a "Likes" counter that increments with a button click. Tab 5 (Trash) shows a unique DifferentTabContent component with an image and text.
Key insight: State (e.g., "Likes" count) persists when switching between tabs 1–4 because React reuses the same TabContent instance. Switching to Tab 5 and back resets the state, as TabContent is unmounted and remounted. This project helped me understand React’s rendering mechanics and state behavior.

<img width="1785" height="789" alt="image" src="https://github.com/user-attachments/assets/1ceaae95-37da-4f30-b23d-ca2525e001b8" />



<img width="1772" height="734" alt="image" src="https://github.com/user-attachments/assets/6db60d32-6d4b-4e3c-8b05-e36f6e85ef5e" />

<img width="1738" height="711" alt="image" src="https://github.com/user-attachments/assets/b0c4c7cc-d726-4f4f-a4c2-b2e7eee7eb01" />

<img width="1774" height="795" alt="image" src="https://github.com/user-attachments/assets/288aea31-3fbf-4b30-a60f-e8ed9cef4e99" />

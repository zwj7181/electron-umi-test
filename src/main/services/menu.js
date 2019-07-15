import { Menu, dialog, ipcMain } from 'electron';
import log from 'electron-log';

function getTemplate() {
  return [
    {
      label: 'MyApp',
      submenu: [
        { role: 'hide', label: '����' },
        { role: 'hideothers', label: '��������Ӧ��' },
        { role: 'unhide', label: '��ʾȫ��' },
        { type: 'separator' },
        { role: 'quit', label: '�˳�', accelerator: "Command+Q" },
      ],
    },
    {
      label: '����',
      submenu: [
        {
          label: '��һ��',
          click: (item, focusedWindow) => {
            focusedWindow.webContents.send('router-goback');
          }
        }, {
          label: '��һ��',
          click: (item, focusedWindow) => {
            focusedWindow.webContents.send('router-goforward');
          }
        },
        { type: 'separator' },
        { label: "����", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "ճ��", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { type: 'separator' },
        ,{
          label: '����',
          click: (item, focusedWindow) => {
            console.info(item, focusedWindow);
            dialog.showMessageBox({
              title: 'MMG',
              type: 'info',
              message: '����һ������',
            });
          }
      }]
    },
    // {
    //   label: 'Edit',
    //   submenu: [
    //     { role: 'undo' },
    //     { role: 'redo' },
    //     { type: 'separator' },
    //     { role: 'cut' },
    //     { role: 'copy' },
    //     { role: 'paste' },
    //     { role: 'selectall' },
    //   ],
    // },
    // {
    //   label: 'View',
    //   submenu: [
    //     { role: 'reload' },
    //     { role: 'toggledevtools' },
    //     { type: 'separator' },
    //     { role: 'togglefullscreen' },
    //   ],
    // },
    {
      role: 'window',
      label: '����',
      submenu: [
        { role: 'minimize', label: '��С��' },
        { role: 'close', label: '�رմ���' },
      ],
    },
  ];
}

export function init() {
  log.info('(menu) init');
  const menu = Menu.buildFromTemplate(getTemplate());
  Menu.setApplicationMenu(menu);
}

/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  TagSuggestModal: () => TagSuggestModal,
  default: () => AutoMOC
});
var import_obsidian = __toModule(require("obsidian"));
var DEFAULT_SETTINGS = {
  showRibbonButton: true
};
var TagSuggestModal = class extends import_obsidian.FuzzySuggestModal {
  constructor(app2, plugin) {
    super(app2);
    this.plugin = plugin;
    this.modalEl.prepend(this.modalEl.createEl("h2", {
      text: "Import notes with tags matching"
    }));
  }
  onOpen() {
    this.setPlaceholder("Type the name of a tag...");
    this.setInstructions([
      { command: "\u2191\u2193", purpose: "to navigate" },
      { command: "\u21B5", purpose: "to select tag" },
      { command: "esc", purpose: "to dismiss" }
    ]);
    this.inputEl.focus();
  }
  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
  getItems() {
    const allFiles = this.app.metadataCache.resolvedLinks;
    let tagsSet = new Set();
    Object.keys(allFiles).forEach((key) => {
      let file = this.app.vault.getAbstractFileByPath(key);
      if (file instanceof import_obsidian.TFile) {
        const tags = app.metadataCache.getFileCache(file).tags;
        if (tags) {
          for (const tag of tags) {
            tagsSet.add(tag["tag"]);
          }
        }
      }
    });
    return Array.from(tagsSet).sort();
  }
  getItemText(item) {
    return item;
  }
  onChooseItem(item, evt) {
    this.selection = item;
    this.plugin.runAutoMOC(item);
  }
};
var AutoMOC = class extends import_obsidian.Plugin {
  getPresentLinks(currFilePath) {
    const allFiles = this.app.metadataCache.resolvedLinks;
    const presentLinks = Object.keys(allFiles[currFilePath]);
    return presentLinks.sort();
  }
  getLinkedMentions(currFilePath) {
    const allFiles = this.app.metadataCache.resolvedLinks;
    let linkedMentions = [];
    Object.keys(allFiles).forEach((key) => {
      if (currFilePath in allFiles[key]) {
        linkedMentions.push(key);
      }
    });
    return linkedMentions.sort();
  }
  getTaggedMentions(currFileName) {
    const allFiles = this.app.metadataCache.resolvedLinks;
    let taggedMentions = [];
    const toCompare = currFileName;
    Object.keys(allFiles).forEach((key) => {
      let file = this.app.vault.getAbstractFileByPath(key);
      if (file instanceof import_obsidian.TFile) {
        const tags = app.metadataCache.getFileCache(file).tags;
        if (tags) {
          for (const tag of tags) {
            if (tag["tag"] === toCompare) {
              taggedMentions.push(file.path);
            }
          }
        }
      }
    });
    return taggedMentions;
  }
  addMissingLinks(activeFileView, presentLinks, allLinkedMentions) {
    let addFlag = false;
    for (const path of allLinkedMentions) {
      if (!presentLinks.includes(path)) {
        let found = this.app.vault.getAbstractFileByPath(path);
        if (found instanceof import_obsidian.TFile) {
          const fileAliases = this.app.metadataCache.getFileCache(found).frontmatter;
          let alias = "";
          if (fileAliases && Array.isArray(fileAliases["aliases"]) && fileAliases["aliases"].length > 0) {
            alias = "|" + fileAliases.aliases[0];
          }
          activeFileView.editor.replaceSelection(this.app.fileManager.generateMarkdownLink(found, activeFileView.file.path, alias = alias) + "\n");
          addFlag = true;
        }
      }
    }
    if (!addFlag)
      new import_obsidian.Notice("No new links found");
  }
  runAutoMOC(tag) {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (view != null && view.file.extension === "md") {
      new import_obsidian.Notice("Linking mentions");
      const presentLinks = this.getPresentLinks(view.file.path);
      let linkedMentions;
      if (!tag) {
        linkedMentions = this.getLinkedMentions(view.file.path);
      } else {
        linkedMentions = this.getTaggedMentions(tag);
      }
      this.addMissingLinks(view, presentLinks, linkedMentions);
    } else {
      new import_obsidian.Notice("Failed to link mentions, file type is not a markdown file");
    }
  }
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      if (this.settings.showRibbonButton) {
        const ribbonIconEl = this.addRibbonIcon("sheets-in-box", "AutoMOC", (evt) => {
          this.runAutoMOC();
        });
      }
      this.addCommand({
        id: "add-missing-linked-mentions",
        name: "Add missing linked mentions at the cursor position",
        editorCallback: (editor, view) => {
          this.runAutoMOC();
        }
      });
      this.addCommand({
        id: "add-missing-notes-by-tag",
        name: "Add missing notes with specific tag at the current cursor location",
        editorCallback: (editor, view) => {
          new TagSuggestModal(this.app, this).open();
        }
      });
      this.addSettingTab(new AutoMOCSettingTab(this.app, this));
    });
  }
  onunload() {
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
var AutoMOCSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app2, plugin) {
    super(app2, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Show ribbon button").setDesc("Enable or disable the ribbon button for this plugin. You can still run the plugin with a hotkey (requires restart)").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.showRibbonButton).onChange((showRibbonButton) => {
        this.plugin.settings.showRibbonButton = showRibbonButton;
        this.plugin.saveSettings();
      });
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcclxuXHRBcHAsXHJcblx0RWRpdG9yLFxyXG5cdE1hcmtkb3duVmlldyxcclxuXHROb3RpY2UsXHJcblx0UGx1Z2luLFxyXG5cdFBsdWdpblNldHRpbmdUYWIsXHJcblx0U2V0dGluZyxcclxuXHRURmlsZSxcclxuXHRGdXp6eVN1Z2dlc3RNb2RhbCxcclxufSBmcm9tIFwib2JzaWRpYW5cIjtcclxuXHJcbmludGVyZmFjZSBBdXRvTU9DU2V0dGluZ3Mge1xyXG5cdHNob3dSaWJib25CdXR0b246IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IEF1dG9NT0NTZXR0aW5ncyA9IHtcclxuXHRzaG93UmliYm9uQnV0dG9uOiB0cnVlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ1N1Z2dlc3RNb2RhbCBleHRlbmRzIEZ1enp5U3VnZ2VzdE1vZGFsPHN0cmluZz4ge1xyXG5cdHNlbGVjdGlvbjogc3RyaW5nO1xyXG5cdHBsdWdpbjogQXV0b01PQztcclxuXHJcblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogQXV0b01PQykge1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG5cclxuXHRcdHRoaXMubW9kYWxFbC5wcmVwZW5kKFxyXG5cdFx0XHR0aGlzLm1vZGFsRWwuY3JlYXRlRWwoXCJoMlwiLCB7XHJcblx0XHRcdFx0dGV4dDogXCJJbXBvcnQgbm90ZXMgd2l0aCB0YWdzIG1hdGNoaW5nXCIsXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0b25PcGVuKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zZXRQbGFjZWhvbGRlcihcIlR5cGUgdGhlIG5hbWUgb2YgYSB0YWcuLi5cIik7XHJcblx0XHR0aGlzLnNldEluc3RydWN0aW9ucyhbXHJcblx0XHRcdHsgY29tbWFuZDogXCJcdTIxOTFcdTIxOTNcIiwgcHVycG9zZTogXCJ0byBuYXZpZ2F0ZVwiIH0sXHJcblx0XHRcdHsgY29tbWFuZDogXCJcdTIxQjVcIiwgcHVycG9zZTogXCJ0byBzZWxlY3QgdGFnXCIgfSxcclxuXHRcdFx0eyBjb21tYW5kOiBcImVzY1wiLCBwdXJwb3NlOiBcInRvIGRpc21pc3NcIiB9LFxyXG5cdFx0XSk7XHJcblxyXG5cdFx0dGhpcy5pbnB1dEVsLmZvY3VzKCk7XHJcblx0fVxyXG5cclxuXHRvbkNsb3NlKCkge1xyXG5cdFx0bGV0IHsgY29udGVudEVsIH0gPSB0aGlzO1xyXG5cdFx0Y29udGVudEVsLmVtcHR5KCk7XHJcblx0fVxyXG5cclxuXHRnZXRJdGVtcygpOiBzdHJpbmdbXSB7XHJcblx0XHRjb25zdCBhbGxGaWxlcyA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUucmVzb2x2ZWRMaW5rcztcclxuXHRcdGxldCB0YWdzU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG5cdFx0T2JqZWN0LmtleXMoYWxsRmlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0XHRsZXQgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChrZXkpO1xyXG5cdFx0XHRpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XHJcblx0XHRcdFx0Y29uc3QgdGFncyA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKS50YWdzO1xyXG5cdFx0XHRcdGlmICh0YWdzKSB7XHJcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHRhZyBvZiB0YWdzKSB7XHJcblx0XHRcdFx0XHRcdHRhZ3NTZXQuYWRkKHRhZ1tcInRhZ1wiXSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0YWdzU2V0KS5zb3J0KCk7XHJcblx0fVxyXG5cclxuXHRnZXRJdGVtVGV4dChpdGVtOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIGl0ZW07XHJcblx0fVxyXG5cclxuXHRvbkNob29zZUl0ZW0oaXRlbTogc3RyaW5nLCBldnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcblx0XHR0aGlzLnNlbGVjdGlvbiA9IGl0ZW07XHJcblx0XHR0aGlzLnBsdWdpbi5ydW5BdXRvTU9DKGl0ZW0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b01PQyBleHRlbmRzIFBsdWdpbiB7XHJcblx0c2V0dGluZ3M6IEF1dG9NT0NTZXR0aW5ncztcclxuXHJcblx0Z2V0UHJlc2VudExpbmtzKGN1cnJGaWxlUGF0aDogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBhbGxGaWxlcyA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUucmVzb2x2ZWRMaW5rcztcclxuXHRcdGNvbnN0IHByZXNlbnRMaW5rcyA9IE9iamVjdC5rZXlzKGFsbEZpbGVzW2N1cnJGaWxlUGF0aF0pO1xyXG5cclxuXHRcdHJldHVybiBwcmVzZW50TGlua3Muc29ydCgpO1xyXG5cdH1cclxuXHJcblx0Z2V0TGlua2VkTWVudGlvbnMoY3VyckZpbGVQYXRoOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IGFsbEZpbGVzID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5yZXNvbHZlZExpbmtzO1xyXG5cdFx0bGV0IGxpbmtlZE1lbnRpb25zOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblx0XHRPYmplY3Qua2V5cyhhbGxGaWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcblx0XHRcdGlmIChjdXJyRmlsZVBhdGggaW4gYWxsRmlsZXNba2V5XSkge1xyXG5cdFx0XHRcdGxpbmtlZE1lbnRpb25zLnB1c2goa2V5KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGxpbmtlZE1lbnRpb25zLnNvcnQoKTtcclxuXHR9XHJcblxyXG5cdGdldFRhZ2dlZE1lbnRpb25zKGN1cnJGaWxlTmFtZTogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBhbGxGaWxlcyA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUucmVzb2x2ZWRMaW5rcztcclxuXHRcdGxldCB0YWdnZWRNZW50aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cdFx0Y29uc3QgdG9Db21wYXJlID0gY3VyckZpbGVOYW1lO1xyXG5cclxuXHRcdE9iamVjdC5rZXlzKGFsbEZpbGVzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0bGV0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoa2V5KTtcclxuXHRcdFx0aWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xyXG5cdFx0XHRcdGNvbnN0IHRhZ3MgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSkudGFncztcclxuXHRcdFx0XHRpZiAodGFncykge1xyXG5cdFx0XHRcdFx0Zm9yIChjb25zdCB0YWcgb2YgdGFncykge1xyXG5cdFx0XHRcdFx0XHRpZiAodGFnW1widGFnXCJdID09PSB0b0NvbXBhcmUpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWdnZWRNZW50aW9ucy5wdXNoKGZpbGUucGF0aCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiB0YWdnZWRNZW50aW9ucztcclxuXHR9XHJcblxyXG5cdGFkZE1pc3NpbmdMaW5rcyhcclxuXHRcdGFjdGl2ZUZpbGVWaWV3OiBNYXJrZG93blZpZXcsXHJcblx0XHRwcmVzZW50TGlua3M6IEFycmF5PHN0cmluZz4sXHJcblx0XHRhbGxMaW5rZWRNZW50aW9uczogQXJyYXk8c3RyaW5nPlxyXG5cdCkge1xyXG5cdFx0bGV0IGFkZEZsYWcgPSBmYWxzZTtcclxuXHJcblx0XHQvL2NoZWNrcyBmb3IgbWlzc2luZyBsaW5rcyBhbmQgYWRkcyB0aGVtXHJcblx0XHRmb3IgKGNvbnN0IHBhdGggb2YgYWxsTGlua2VkTWVudGlvbnMpIHtcclxuXHRcdFx0aWYgKCFwcmVzZW50TGlua3MuaW5jbHVkZXMocGF0aCkpIHtcclxuXHRcdFx0XHRsZXQgZm91bmQgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XHJcblxyXG5cdFx0XHRcdGlmIChmb3VuZCBpbnN0YW5jZW9mIFRGaWxlKSB7XHJcblx0XHRcdFx0XHQvL2NoZWNrIGZvciBhbGlhc2VzXHJcblx0XHRcdFx0XHRjb25zdCBmaWxlQWxpYXNlcyA9XHJcblx0XHRcdFx0XHRcdHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZvdW5kKS5mcm9udG1hdHRlcjtcclxuXHRcdFx0XHRcdGxldCBhbGlhcyA9IFwiXCI7XHJcblxyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRmaWxlQWxpYXNlcyAmJlxyXG5cdFx0XHRcdFx0XHRBcnJheS5pc0FycmF5KGZpbGVBbGlhc2VzW1wiYWxpYXNlc1wiXSkgJiZcclxuXHRcdFx0XHRcdFx0ZmlsZUFsaWFzZXNbXCJhbGlhc2VzXCJdLmxlbmd0aCA+IDBcclxuXHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRhbGlhcyA9IFwifFwiICsgZmlsZUFsaWFzZXMuYWxpYXNlc1swXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRhY3RpdmVGaWxlVmlldy5lZGl0b3IucmVwbGFjZVNlbGVjdGlvbihcclxuXHRcdFx0XHRcdFx0dGhpcy5hcHAuZmlsZU1hbmFnZXIuZ2VuZXJhdGVNYXJrZG93bkxpbmsoXHJcblx0XHRcdFx0XHRcdFx0Zm91bmQsXHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlRmlsZVZpZXcuZmlsZS5wYXRoLFxyXG5cdFx0XHRcdFx0XHRcdChhbGlhcyA9IGFsaWFzKVxyXG5cdFx0XHRcdFx0XHQpICsgXCJcXG5cIlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGFkZEZsYWcgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghYWRkRmxhZykgbmV3IE5vdGljZShcIk5vIG5ldyBsaW5rcyBmb3VuZFwiKTtcclxuXHR9XHJcblxyXG5cdHJ1bkF1dG9NT0ModGFnPzogc3RyaW5nKSB7XHJcblx0XHRjb25zdCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuXHJcblx0XHRpZiAodmlldyAhPSBudWxsICYmIHZpZXcuZmlsZS5leHRlbnNpb24gPT09IFwibWRcIikge1xyXG5cdFx0XHRuZXcgTm90aWNlKFwiTGlua2luZyBtZW50aW9uc1wiKTtcclxuXHRcdFx0Y29uc3QgcHJlc2VudExpbmtzID0gdGhpcy5nZXRQcmVzZW50TGlua3Modmlldy5maWxlLnBhdGgpOyAvLyBsaW5rcyBhbHJlYWR5IGluIHRoZSBkb2N1bWVudFxyXG5cclxuXHRcdFx0bGV0IGxpbmtlZE1lbnRpb25zOiBBcnJheTxzdHJpbmc+O1xyXG5cdFx0XHRpZiAoIXRhZykge1xyXG5cdFx0XHRcdGxpbmtlZE1lbnRpb25zID0gdGhpcy5nZXRMaW5rZWRNZW50aW9ucyh2aWV3LmZpbGUucGF0aCk7IC8vIGFsbCBsaW5rZWQgbWVudGlvbnMgZXZlbiB0aG9zZSBub3QgcHJlc2VudFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxpbmtlZE1lbnRpb25zID0gdGhpcy5nZXRUYWdnZWRNZW50aW9ucyh0YWcpOyAvLyB0YWdnZWQgbWVudGlvbnMgYXJlIGxvb2tlZCB1cCBieSBiYXNlbmFtZSByYXRoZXIgdGhhbiBwYXRoXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuYWRkTWlzc2luZ0xpbmtzKHZpZXcsIHByZXNlbnRMaW5rcywgbGlua2VkTWVudGlvbnMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmV3IE5vdGljZShcclxuXHRcdFx0XHRcIkZhaWxlZCB0byBsaW5rIG1lbnRpb25zLCBmaWxlIHR5cGUgaXMgbm90IGEgbWFya2Rvd24gZmlsZVwiXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnNob3dSaWJib25CdXR0b24pIHtcclxuXHRcdFx0Y29uc3QgcmliYm9uSWNvbkVsID0gdGhpcy5hZGRSaWJib25JY29uKFxyXG5cdFx0XHRcdFwic2hlZXRzLWluLWJveFwiLFxyXG5cdFx0XHRcdFwiQXV0b01PQ1wiLFxyXG5cdFx0XHRcdChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucnVuQXV0b01PQygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogXCJhZGQtbWlzc2luZy1saW5rZWQtbWVudGlvbnNcIixcclxuXHRcdFx0bmFtZTogXCJBZGQgbWlzc2luZyBsaW5rZWQgbWVudGlvbnMgYXQgdGhlIGN1cnNvciBwb3NpdGlvblwiLFxyXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCB2aWV3OiBNYXJrZG93blZpZXcpID0+IHtcclxuXHRcdFx0XHR0aGlzLnJ1bkF1dG9NT0MoKTtcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiBcImFkZC1taXNzaW5nLW5vdGVzLWJ5LXRhZ1wiLFxyXG5cdFx0XHRuYW1lOiBcIkFkZCBtaXNzaW5nIG5vdGVzIHdpdGggc3BlY2lmaWMgdGFnIGF0IHRoZSBjdXJyZW50IGN1cnNvciBsb2NhdGlvblwiLFxyXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCB2aWV3OiBNYXJrZG93blZpZXcpID0+IHtcclxuXHRcdFx0XHRuZXcgVGFnU3VnZ2VzdE1vZGFsKHRoaXMuYXBwLCB0aGlzKS5vcGVuKCk7XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IEF1dG9NT0NTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblx0fVxyXG5cclxuXHRvbnVubG9hZCgpIHt9XHJcblxyXG5cdGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKFxyXG5cdFx0XHR7fSxcclxuXHRcdFx0REVGQVVMVF9TRVRUSU5HUyxcclxuXHRcdFx0YXdhaXQgdGhpcy5sb2FkRGF0YSgpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEF1dG9NT0NTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcblx0cGx1Z2luOiBBdXRvTU9DO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBBdXRvTU9DKSB7XHJcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XHJcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuXHR9XHJcblxyXG5cdGRpc3BsYXkoKTogdm9pZCB7XHJcblx0XHRjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKFwiU2hvdyByaWJib24gYnV0dG9uXCIpXHJcblx0XHRcdC5zZXREZXNjKFxyXG5cdFx0XHRcdFwiRW5hYmxlIG9yIGRpc2FibGUgdGhlIHJpYmJvbiBidXR0b24gZm9yIHRoaXMgcGx1Z2luLiBZb3UgY2FuIHN0aWxsIHJ1biB0aGUgcGx1Z2luIHdpdGggYSBob3RrZXkgKHJlcXVpcmVzIHJlc3RhcnQpXCJcclxuXHRcdFx0KVxyXG5cdFx0XHQuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcclxuXHRcdFx0XHR0b2dnbGVcclxuXHRcdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93UmliYm9uQnV0dG9uKVxyXG5cdFx0XHRcdFx0Lm9uQ2hhbmdlKChzaG93UmliYm9uQnV0dG9uKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dSaWJib25CdXR0b24gPVxyXG5cdFx0XHRcdFx0XHRcdHNob3dSaWJib25CdXR0b247XHJcblx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVU87QUFNUCxJQUFNLG1CQUFvQztBQUFBLEVBQ3pDLGtCQUFrQjtBQUFBO0FBR1osb0NBQThCLGtDQUEwQjtBQUFBLEVBSTlELFlBQVksTUFBVSxRQUFpQjtBQUN0QyxVQUFNO0FBQ04sU0FBSyxTQUFTO0FBRWQsU0FBSyxRQUFRLFFBQ1osS0FBSyxRQUFRLFNBQVMsTUFBTTtBQUFBLE1BQzNCLE1BQU07QUFBQTtBQUFBO0FBQUEsRUFLVCxTQUFlO0FBQ2QsU0FBSyxlQUFlO0FBQ3BCLFNBQUssZ0JBQWdCO0FBQUEsTUFDcEIsRUFBRSxTQUFTLGdCQUFNLFNBQVM7QUFBQSxNQUMxQixFQUFFLFNBQVMsVUFBSyxTQUFTO0FBQUEsTUFDekIsRUFBRSxTQUFTLE9BQU8sU0FBUztBQUFBO0FBRzVCLFNBQUssUUFBUTtBQUFBO0FBQUEsRUFHZCxVQUFVO0FBQ1QsUUFBSSxFQUFFLGNBQWM7QUFDcEIsY0FBVTtBQUFBO0FBQUEsRUFHWCxXQUFxQjtBQUNwQixVQUFNLFdBQVcsS0FBSyxJQUFJLGNBQWM7QUFDeEMsUUFBSSxVQUFV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

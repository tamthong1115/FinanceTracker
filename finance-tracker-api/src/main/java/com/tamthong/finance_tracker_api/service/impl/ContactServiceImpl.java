package com.tamthong.finance_tracker_api.service.impl;

import com.tamthong.finance_tracker_api.dto.ContactDTO;
import com.tamthong.finance_tracker_api.model.Contact;
import com.tamthong.finance_tracker_api.repository.ContactRepository;
import com.tamthong.finance_tracker_api.service.ContactService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactServiceImpl implements ContactService {
    private final ContactRepository contactRepository;
    
    @Override
    public ContactDTO createContact(ContactDTO contactDTO) {
        Contact contact = Contact.builder()
            .name(contactDTO.getName())
            .email(contactDTO.getEmail())
            .message(contactDTO.getMessage())
            .build();

        Contact savedContact = contactRepository.save(contact);
        log.info("Saved contact message from: {} <{}>", contact.getName(), contact.getEmail());

        return ContactDTO.builder()
            .name(savedContact.getName())
            .email(savedContact.getEmail())
            .message(savedContact.getMessage())
            .build();
    }
}

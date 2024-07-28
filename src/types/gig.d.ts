declare type Gig = {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: {
    ratio?: string;
    url: string;
    width: number;
    height: number;
    fallback: boolean;
  }[];
  sales: {
    public: {
      startDateTime: string;
      startTBD: boolean;
      startTBA: boolean;
      endDateTime: string;
    };
  };
  dates: {
    start: {
      localDate: string;
      localTime: string;
      dateTime: Date;
      dateTBD: boolean;
      dateTBA: boolean;
      timeTBA: boolean;
      noSpecificTime: boolean;
    };
    timezone: string;
    status: {
      code: "offsale" | "onsale";
    };
    spanMultipleDays: boolean;
  };
  classifications: {
    primary: boolean;
    segment: {
      id: string;
      name: string;
    };
    genre: {
      id: string;
      name: string;
    };
    subGenre: {
      id: string;
      name: string;
    };
    type: {
      id: string;
      name: string;
    };
    subType: {
      id: string;
      name: string;
    };
    family: boolean;
  }[];
  promoter: {
    id: string;
    name: string;
    description: string;
  };
  promoters: {
    id: string;
    name: string;
    description: string;
  }[];
  pleaseNote: string;
  priceRanges: {
    type: string;
    currency: string;
    min: number;
    max: number;
  }[];
  products: {
    name: string;
    id: string;
    url: string;
    type: string;
    classifications: {
      primary: boolean;
      segment: {
        id: string;
        name: string;
      };
      genre: {
        id: string;
        name: string;
      };
      subGenre: {
        id: string;
        name: string;
      };
      type: {
        id: string;
        name: string;
      };
      subType: {
        id: string;
        name: string;
      };
      family: boolean;
    }[];
  }[];
  seatmap: {
    staticUrl: string;
    id: string;
  };
  accessibility: {
    ticketLimit: number;
    id: string;
  };
  ticketLimit: {
    info: string;
    id: string;
  };
  ageRestrictions: {
    legalAgeEnforced: boolean;
    id: string;
  };
  ticketing: {
    safeTix: {
      enabled: boolean;
      inAppOnlyEnabled: boolean;
    };
    allInclusivePricing: {
      enabled: boolean;
    };
    id: string;
  };
  _links: {
    self: {
      href: string;
    };
    attractions: {
      href: string;
    }[];
    venues: {
      href: string;
    }[];
  };
  _embedded: {
    venues: {
      name: string;
      type: string;
      id: string;
      test: boolean;
      url: string;
      locale: string;
      externalLinks: {
        appDeepLink: {
          url: string;
        }[];
      };
      images: {
        ratio: string;
        url: string;
        width: number;
        height: number;
        fallback: boolean;
      }[];
      postalCode: string;
      timezone: string;
      city: {
        name: string;
      };
      state: {
        name: string;
        stateCode: string;
      };
      country: {
        name: string;
        countryCode: string;
      };
      address: {
        line1: string;
      };
      location: {
        longitude: string;
        latitude: string;
      };
      markets: {
        name: string;
        id: string;
      }[];
      dmas: {
        id: number;
      }[];
      boxOfficeInfo: {
        openHoursDetail: string;
        acceptedPaymentDetail: string;
        willCallDetail: string;
      };
      parkingDetail: string;
      accessibleSeatingDetail: string;
      generalInfo: {
        generalRule: string;
        childRule: string;
      };
      upcomingEvents: {
        ticketmaster: number;
        _total: number;
        _filtered: number;
      };
      _links: {
        self: {
          href: string;
        };
      };
    }[];
    attractions: {
      name: string;
      type: string;
      id: string;
      test: boolean;
      url: string;
      locale: string;
      externalLinks: {
        youtube?: { url: string }[];
        twitter?: { url: string }[];
        itunes?: { url: string }[];
        lastfm?: { url: string }[];
        facebook?: { url: string }[];
        wiki?: { url: string }[];
        instagram?: { url: string }[];
        musicbrainz?: { id: string }[];
        homepage?: { url: string }[];
      };
      images: {
        ratio?: string;
        url: string;
        width: number;
        height: number;
        fallback: boolean;
      }[];
      classifications: {
        primary: boolean;
        segment: {
          id: string;
          name: string;
        };
        genre: {
          id: string;
          name: string;
        };
        subGenre: {
          id: string;
          name: string;
        };
        type: {
          id: string;
          name: string;
        };
        subType: {
          id: string;
          name: string;
        };
        family: boolean;
      }[];
      upcomingEvents: {
        ticketmaster: number;
        _total: number;
        _filtered: number;
      };
      _links: {
        self: {
          href: string;
        };
      };
    }[];
  };
};

declare type GigResponse = {
  _embedded: {
    events: Gig[];
  };
};
